import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { ProductMap } from 'adapters/driven/mappers/products.map'
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
    const findProduct = await this.prisma.product.findMany({
      include: { category: true }
    })

    const formatProductAndCategory = findProduct.map((product) => {
      return ProductMap.execute(product, product.category)
    })

    return formatProductAndCategory
  }
}
