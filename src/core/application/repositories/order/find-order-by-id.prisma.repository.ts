import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindOrderByIdDTO } from 'adapters/driver/dtos/order/find-order-by-id.dto'
import { FindOrderByIdRepository } from 'core/application/ports/out/find-order-by-id.repository.out'
import { Order } from 'core/domain/entities/order.entity'

export class FindOrderByIdPrismaRepository implements FindOrderByIdRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async findById(pathParameters: FindOrderByIdDTO): Promise<Order | null> {
    //@ts-ignore
    return this.prisma.order.findFirst({
      where: {
        id: pathParameters.id
      }
    })
  }
}
