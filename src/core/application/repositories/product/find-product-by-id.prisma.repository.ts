import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindProductByIdRepository } from 'core/application/ports/out/find-product-by-id.repository.out'
import { Product } from 'core/domain/entities/product.entity'

export class FindProductByIdPrismaRepository
  implements FindProductByIdRepository
{
  constructor(private readonly prisma: DatabaseConnection) {}

  async findById(pathParameters: any): Promise<Product | null> {
    return this.prisma.product.findFirst({
      where: {
        id: pathParameters.id
      }
    })
  }
}