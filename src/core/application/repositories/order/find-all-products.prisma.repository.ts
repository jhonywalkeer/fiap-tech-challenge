import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindAllOrdersDTO } from 'adapters/driver/dtos/order/find-all-orders.dto'
import { FindAllOrdersRepository } from 'core/application/ports/out/find-all-orders.repository.out'
import { Order } from 'core/domain/entities/order.entity'

export class FindAllOrdersPrismaRepository implements FindAllOrdersRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async findAll(queryParameters: FindAllOrdersDTO): Promise<Order[] | null> {
    //@ts-ignore
    return this.prisma.order.findMany({})
  }
}
