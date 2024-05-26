import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { FindProductByIdPrismaRepository } from './find-product-by-id.prisma.repository'
import { UpdateProductRepository } from 'core/application/ports/out/update-product.repository.out'
import { Product } from 'core/domain/entities/product.entity'
import { UpdateProductDTO } from 'adapters/driver/dtos/product/update-product.dto'

export class UpdateProductPrismaRepository implements UpdateProductRepository {
  constructor(
    private readonly prisma: DatabaseConnection,
    private readonly findProductById: FindProductByIdPrismaRepository
  ) {}

  async update(pathParameters: UpdateProductDTO): Promise<Product | null> {
    const product = await this.findProductById.findById({
      id: pathParameters.id
    })

    if (product === null) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorMessage.NotFoundInformation,
        'Produto informado nao existe'
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
          : product.category_id,
        description: pathParameters.description
          ? pathParameters.description
          : product.description
      }
    })

    const find = await this.findProductById.findById({
      id: update.id
    })

    return find
  }
}
