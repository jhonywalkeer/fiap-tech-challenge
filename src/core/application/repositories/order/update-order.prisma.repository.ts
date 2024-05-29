import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { UpdateOrderRepository } from '../../../../core/application/ports/out/update-order.repository.out'
import { FindOrderByIdPrismaRepository } from './find-order-by-id.prisma.repository'
import { Order } from '../../../../core/domain/entities/order.entity'
import { UpdateOrderDTO } from '../../../../adapters/driver/dtos/order/update-order.dto'
import { ErrorMessage } from '../../../../common/enums/error-message.enum'
import { PaymentCommunication } from '../../../../adapters/driven/infrastructure/gateway/payment/payment-communication'

export class UpdateOrderPrismaRepository implements UpdateOrderRepository {
  constructor(
    private readonly prisma: DatabaseConnection,
    private readonly findOrderById: FindOrderByIdPrismaRepository
  ) {}

  async update(pathParameters: UpdateOrderDTO): Promise<Order | null> {
    const QrCode = await PaymentCommunication()
    const findOrder = await this.findOrderById.findById({
      id: pathParameters.id
    })

    if (findOrder === null) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.OrderNotFound
      )
    }
    const findPayment = await this.prisma.payment.findFirst({
      where: {
        order_id: findOrder?.order
      }
    })

    const findItems = await this.prisma.order_item.findMany({
      where: {
        order_id: findOrder?.id
      }
    })

    const findProducts = await this.prisma.product.findMany({
      where: {
        id: {
          in: findItems.map((item) => item.product_id)
        }
      }
    })

    if (!findProducts) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.ProductsNotFound
      )
    }

    const updateOrder = await this.prisma.order.update({
      where: {
        id: pathParameters.id
      },
      data: {
        observation: pathParameters.observation
          ? pathParameters.observation
          : findOrder.observation
      }
    })

    for (const item of pathParameters.items) {
      await this.prisma.order_item.update({
        where: {
          id: findItems.find(
            (findItem) => findItem.product_id === item.product_id
          )?.id,
          order_id: findOrder?.id,
          product_id: item.product_id
        },
        data: {
          quantity: item.quantity
        }
      })
    }

    const updatePayment = await this.prisma.payment.update({
      where: {
        id: findPayment?.id
      },
      data: {
        payment_method: pathParameters.payment.method,
        amount: pathParameters.items.reduce(
          (acc, item) =>
            acc +
            findProducts.find((product) => product.id === item.product_id)
              ?.price! *
              item.quantity,
          0
        )
      }
    })

    return {
      id: updateOrder.id,
      order: updateOrder.order,
      status: updateOrder.status,
      items: pathParameters.items.map((item) => {
        const product = findProducts.find(
          (product) => product.id === item.product_id
        )
        return {
          product_id: item.product_id,
          name: product?.name,
          price: product?.price,
          quantity: item.quantity,
          amount: product?.price! * item.quantity
        }
      }),
      customer: updateOrder.customer,
      payment: {
        id: updatePayment.id,
        order_id: updatePayment.order_id,
        user_id: updatePayment.user_id,
        payment_method: updatePayment.payment_method,
        amount: updatePayment.amount,
        payment_date: updatePayment.payment_date,
        status: updatePayment.status,
        qr_code: QrCode
      },
      observation: updateOrder.observation
    }
  }
}
