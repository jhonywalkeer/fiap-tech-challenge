import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { FindCategoryByIdDTO } from '../../../../adapters/driver/dtos/category/find-category-by-id.dto'
import { FindCategoryByIdRepository } from '../../../../core/application/ports/out/find-category-by-id.repository.out'
import { Category } from '../../../../core/domain/entities/category.entity'

export class FindCategoryByIdPrismaRepository
  implements FindCategoryByIdRepository
{
  constructor(private readonly prisma: DatabaseConnection) {}

  async findById(
    pathParameters: FindCategoryByIdDTO
  ): Promise<Category | null> {
    return this.prisma.category.findFirst({
      where: {
        id: pathParameters.id
      }
    })
  }
}
