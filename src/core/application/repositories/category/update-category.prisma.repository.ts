import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { UpdateCategoryRepository } from '../../../../core/application/ports/out/update-category.repository.out'
import { FindCategoryByIdPrismaRepository } from './find-category-by-id.prisma.repository'
import { UpdateCategoryDTO } from '../../../../adapters/driver/dtos/category/update-category.dto'
import { Category } from '../../../../core/domain/entities/category.entity'
import { ErrorMessage } from '../../../../common/enums/error-message.enum'

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

    if (!category) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.CategoryNotFound
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
