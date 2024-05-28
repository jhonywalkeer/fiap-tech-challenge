import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { ProductMap } from 'adapters/driven/mappers/products.map'
import { FindProductByIdDTO } from 'adapters/driver/dtos/product/find-product-by-id.dto'
import { FindProductByIdRepository } from 'core/application/ports/out/find-product-by-id.repository.out'
import { Product } from 'core/domain/entities/product.entity'

export class FindProductByIdPrismaRepository
  implements FindProductByIdRepository
{
  constructor(private readonly prisma: DatabaseConnection) {}

  async findById(pathParameters: FindProductByIdDTO): Promise<Product | null> {
    const findProduct = await this.prisma.product.findFirst({
      where: {
        id: pathParameters.id
      },
      include: { category: true }
    })
    const formatProductAndCategory = ProductMap.execute(
      findProduct,
      findProduct?.category
    )

    return formatProductAndCategory
  }
}
