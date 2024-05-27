import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { DeleteCategoryRepository } from 'core/application/ports/out/delete-category.repository.out'
import { FindCategoryByIdPrismaRepository } from './find-category-by-id.prisma.repository'
import { DeleteCategoryDTO } from 'adapters/driver/dtos/category/delete-category.dto'

export class DeleteCategoryPrismaRepository
  implements DeleteCategoryRepository
{
  constructor(
    private readonly prisma: DatabaseConnection,
    private readonly findCategoryById: FindCategoryByIdPrismaRepository
  ) {}

  async delete(pathParameters: DeleteCategoryDTO): Promise<void> {
    const category = await this.findCategoryById.findById({
      id: pathParameters.id
    })

    if (category === null) {
      throw new HttpException(
        StatusCode.NoContent,
        ErrorName.NotFoundInformation,
        'Categoria já deletada ou inexistente'
      )
    }

    await this.prisma.category.delete({
      where: {
        id: pathParameters.id
      }
    })
  }
}
