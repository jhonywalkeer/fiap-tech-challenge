import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { CreateCategoryDTO } from 'adapters/driver/dtos/category/create-category.dto'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { CreateCategoryRepository } from 'core/application/ports/out/create-category.repository.out'
import { Category } from 'core/domain/entities/category.entity'

export class CreateCategoryPrismaRepository
  implements CreateCategoryRepository
{
  constructor(private readonly prisma: DatabaseConnection) {}

  async create(body: CreateCategoryDTO): Promise<Category> {
    const product = await this.prisma.category.findMany({
      where: { name: body.name }
    })

    if (product.length > 0) {
      throw new HttpException(
        StatusCode.NoContent,
        ErrorMessage.NotFoundInformation,
        'Categoria já existente'
      )
    }

    return this.prisma.category.create({
      data: {
        name: body.name,
        description: body.description
      }
    })
  }
}
