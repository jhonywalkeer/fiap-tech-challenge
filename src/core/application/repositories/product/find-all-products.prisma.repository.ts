import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindAllProductsDTO } from 'adapters/driver/dtos/product/find-all-product.dto'
import { FindAllProductRepository } from 'core/application/ports/out/find-all-products.repository.out'
import { Product } from 'core/domain/entities/product.entity'

export class FindAllProductsPrismaRepository
  implements FindAllProductRepository
{
  constructor(private readonly prisma: DatabaseConnection) {}

  async findAll(
    queryParameters: FindAllProductsDTO
  ): Promise<Product[] | null> {
    return this.prisma.product.findMany({})
  }
}
