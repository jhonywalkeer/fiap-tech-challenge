import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { ProductMap } from '../../../../adapters/driven/mappers/products.map'
import { CreateProductDTO } from '../../../../adapters/driver/dtos/product/create-product.dto'
import { ErrorMessage } from '../../../../common/enums/error-message.enum'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { CreateProductRepository } from '../../../../core/application/ports/out/create-product.repository.out'
import { Product } from '../../../../core/domain/entities/product.entity'

export class CreateProductPrismaRepository implements CreateProductRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async create(body: CreateProductDTO): Promise<Product> {
    const product = await this.prisma.product.findMany({
      where: { name: body.name },
      include: { category: true }
    })

    const category = await this.prisma.category.findUnique({
      where: { id: body.category_id }
    })

    if (!category) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.CategoryNotFound
      )
    }

    if (product.length > 0) {
      throw new HttpException(
        StatusCode.Conflict,
        ErrorName.ResourceAlreadyExists,
        ErrorMessage.ProductExists
      )
    }

    const createProduct = await this.prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        category_id: category.id,
        price: body.price
      }
    })

    return ProductMap.execute(createProduct, category)
  }
}
