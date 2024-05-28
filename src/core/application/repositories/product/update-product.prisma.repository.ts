import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { FindProductByIdPrismaRepository } from './find-product-by-id.prisma.repository'
import { UpdateProductRepository } from '../../../../core/application/ports/out/update-product.repository.out'
import { Product } from '../../../../core/domain/entities/product.entity'
import { UpdateProductDTO } from '../../../../adapters/driver/dtos/product/update-product.dto'
import { ProductMap } from '../../../../adapters/driven/mappers/products.map'
import { ErrorMessage } from '../../../../common/enums/error-message.enum'

export class UpdateProductPrismaRepository implements UpdateProductRepository {
  constructor(
    private readonly prisma: DatabaseConnection,
    private readonly findProductById: FindProductByIdPrismaRepository
  ) {}

  async update(pathParameters: UpdateProductDTO): Promise<Product | null> {
    const product = await this.findProductById.findById({
      id: pathParameters.id
    })

    const category = await this.prisma.category.findUnique({
      where: {
        id: pathParameters.category_id
      }
    })

    if (product === null) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.ProductNotFound
      )
    }

    if (category === null) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.CategoriesNotFound
      )
    }

    const update = await this.prisma.product.update({
      where: {
        id: pathParameters.id
      },
      data: {
        name: pathParameters.name ? pathParameters.name : product.name,
        price: pathParameters.price ? pathParameters.price : product.price,
        category_id: pathParameters.category_id
          ? pathParameters.category_id
          : product.category.id,
        description: pathParameters.description
          ? pathParameters.description
          : product.description
      }
    })

    const findProduct = await this.findProductById.findById({
      id: update.id
    })

    return ProductMap.execute(findProduct, findProduct?.category)
  }
}
