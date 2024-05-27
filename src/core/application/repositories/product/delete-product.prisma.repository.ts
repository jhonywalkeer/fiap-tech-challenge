import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { DeleteProductDTO } from 'adapters/driver/dtos/product/delete-product.dto'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { DeleteProductRepository } from 'core/application/ports/out/delete-product.repository.out'
import { FindProductByIdPrismaRepository } from './find-product-by-id.prisma.repository'

export class DeleteProductPrismaRepository implements DeleteProductRepository {
  constructor(
    private readonly prisma: DatabaseConnection,
    private readonly findProductById: FindProductByIdPrismaRepository
  ) {}

  async delete(pathParameters: DeleteProductDTO): Promise<void> {
    const product = await this.findProductById.findById({
      id: pathParameters.id
    })

    if (product === null) {
      throw new HttpException(
        StatusCode.NoContent,
        ErrorName.NotFoundInformation,
        'Produto já deletado ou inexistente'
      )
    }

    await this.prisma.product.delete({
      where: {
        id: pathParameters.id
      }
    })
  }
}
