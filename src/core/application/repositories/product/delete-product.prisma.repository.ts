import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { DeleteProductDTO } from 'adapters/driver/dtos/product/delete-product.dto'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { DeleteProductRepository } from 'core/application/ports/out/delete-product.repository.out'

export class DeleteProductPrismaRepository implements DeleteProductRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async delete(pathParameters: DeleteProductDTO): Promise<void> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: pathParameters.id
      }
    })

    if (product === null) {
      throw new HttpException(
        StatusCode.NoContent,
        ErrorMessage.NotFoundInformation,
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
