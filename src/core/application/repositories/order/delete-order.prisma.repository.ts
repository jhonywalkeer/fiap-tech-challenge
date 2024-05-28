import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { DeleteOrderRepository } from 'core/application/ports/out/delete-order.repository.out'
import { FindOrderByIdPrismaRepository } from './find-order-by-id.prisma.repository'
import { DeleteOrderDTO } from 'adapters/driver/dtos/order/delete-order.dto'
import { ErrorMessage } from 'common/enums/error-message.enum'

export class DeleteOrderPrismaRepository implements DeleteOrderRepository {
  constructor(
    private readonly prisma: DatabaseConnection,
    private readonly findOrderById: FindOrderByIdPrismaRepository
  ) {}

  async delete(pathParameters: DeleteOrderDTO): Promise<void> {
    const product = await this.findOrderById.findById({
      id: pathParameters.id
    })

    if (product === null) {
      throw new HttpException(
        StatusCode.NoContent,
        ErrorName.NotFoundInformation,
        ErrorMessage.OrderNotExists
      )
    }

    await this.prisma.product.delete({
      where: {
        id: pathParameters.id
      }
    })
  }
}
