import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { UpdateOrderRepository } from 'core/application/ports/out/update-order.repository.out'
import { FindOrderByIdPrismaRepository } from './find-order-by-id.prisma.repository'
import { Order } from 'core/domain/entities/order.entity'
import { UpdateOrderDTO } from 'adapters/driver/dtos/order/update-order.dto'

export class UpdateOrderPrismaRepository implements UpdateOrderRepository {
  constructor(
    private readonly prisma: DatabaseConnection,
    private readonly findOrderById: FindOrderByIdPrismaRepository
  ) {}

  async update(pathParameters: UpdateOrderDTO): Promise<Order | null> {
    const order = await this.findOrderById.findById({
      id: pathParameters.id
    })

    if (order === null) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        'Pedido informado não existe'
      )
    }

    const update = await this.prisma.order.update({
      where: {
        id: pathParameters.id
      },
      data: {
        customer: pathParameters.customer,
        observation: pathParameters.observation,
        items: {
          deleteMany: {},
          create: pathParameters.items
        },
        payment: {
          delete: {},

          //@ts-ignore
          create: pathParameters.payment
        }
      }
    })

    const find = await this.findOrderById.findById({
      id: update.id
    })

    return find
  }
}
