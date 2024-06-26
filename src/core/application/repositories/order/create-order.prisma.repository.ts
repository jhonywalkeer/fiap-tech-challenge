import { OrderStatus } from '../../../../common/enums/order-status.enum'
import { PaymentCommunication } from '../../../../adapters/driven/infrastructure/gateway/payment/payment-communication'
import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { CreateOrderDTO } from '../../../../adapters/driver/dtos/order/create-order.dto'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { OrderIdentifierGenerator } from '../../../../common/utils/generators/order-identifier.generator'
import { IsCpfIdentify } from '../../../../common/utils/identifiers/is-cpf.identify'
import { CreateOrderRepository } from '../../../../core/application/ports/out/create-order.repository.out'
import { Order } from '../../../../core/domain/entities/order.entity'

export class CreateOrderPrismaRepository implements CreateOrderRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async create(body: CreateOrderDTO): Promise<Order> {
    const identifierOrder = OrderIdentifierGenerator()
    let customerId = null
    let customerName = 'Prefiriu não informar'

    if (body.customer) {
      if (IsCpfIdentify(body.customer)) {
        const identifyCustomer = await this.prisma.user.findUnique({
          where: {
            social_security_number: body.customer
          }
        })
        if (identifyCustomer) {
          customerId = identifyCustomer.id
          customerName = identifyCustomer.name
        }
      } else {
        customerName = body.customer
      }
    }

    const productIds = body.items.map((item) => item.product_id)
    const products = await this.prisma.product.findMany({
      where: {
        id: {
          in: productIds
        }
      }
    })
    const productMap = new Map(products.map((product) => [product.id, product]))
    const orderItems = body.items.map((item) => {
      const product = productMap.get(item.product_id)
      if (!product) {
        throw new HttpException(
          StatusCode.NotFound,
          ErrorName.NotFoundInformation,
          `Produto com id ${item.product_id} não encontrado`
        )
      }
      return {
        product_id: item.product_id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        amount: product.price * item.quantity
      }
    })

    const createOrder = await this.prisma.order.create({
      data: {
        order: identifierOrder,
        status: OrderStatus.AwaitingPayment,
        customer: customerName,
        payment: {
          create: {
            user_id: customerId,
            payment_method: body.payment.method,
            amount: orderItems.reduce((acc, item) => acc + item.amount, 0),
            order_id: identifierOrder,
            qr_code: '',
            status: OrderStatus.AwaitingPayment
          }
        },
        observation: body.observation ?? 'Sem observações',
        created_at: new Date()
      }
    })

    const [createOrderItems, identifyOrder] = await Promise.all([
      await this.prisma.order_item.createMany({
        data: orderItems.map((item) => ({
          order_id: createOrder.id,
          product_id: item.product_id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          amount: item.amount
        }))
      }),
      await this.prisma.order.findFirst({
        where: {
          id: createOrder.id
        }
      })
    ])

    const findPayment = await this.prisma.payment.findFirst({
      where: {
        order_id: identifyOrder?.order
      }
    })

    return {
      id: createOrder.id,
      order: createOrder.order,
      status: createOrder.status,
      items: orderItems,
      customer: createOrder.customer,
      payment: {
        id: findPayment?.id,
        user_id: null,
        payment_method: findPayment?.payment_method,
        amount: findPayment?.amount,
        order_id: findPayment?.order_id,
        qr_code: await PaymentCommunication(),
        status: createOrder.status,
        payment_date: findPayment?.payment_date
      },
      observation: body.observation ?? 'Sem observações'
    }
  }
}
