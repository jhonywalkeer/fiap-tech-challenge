import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { UpdateCategoryRepository } from 'core/application/ports/out/update-category.repository.out'
import { FindCategoryByIdPrismaRepository } from './find-category-by-id.prisma.repository'
import { UpdateCategoryDTO } from 'adapters/driver/dtos/category/update-category.dto'
import { Category } from 'core/domain/entities/category.entity'

export class UpdateCategoryPrismaRepository
  implements UpdateCategoryRepository
{
  constructor(
    private readonly prisma: DatabaseConnection,
    private readonly findCategoryById: FindCategoryByIdPrismaRepository
  ) {}

  async update(pathParameters: UpdateCategoryDTO): Promise<Category | null> {
    const category = await this.findCategoryById.findById({
      id: pathParameters.id
    })

    if (category === null) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorMessage.NotFoundInformation,
        'Categoria informado não existe'
      )
    }

    const update = await this.prisma.category.update({
      where: {
        id: pathParameters.id
      },
      data: {
        name: pathParameters.name ? pathParameters.name : category.name,
        description: pathParameters.description
          ? pathParameters.description
          : category.description
      }
    })

    const find = await this.findCategoryById.findById({
      id: update.id
    })

    return find
  }
}
