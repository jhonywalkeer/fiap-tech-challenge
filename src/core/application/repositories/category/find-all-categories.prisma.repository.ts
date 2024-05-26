import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindAllCategoriesDTO } from 'adapters/driver/dtos/category/find-all-categories.dto'
import { FindAllCategoriesRepository } from 'core/application/ports/out/find-all-categories.repository.out'
import { Category } from 'core/domain/entities/category.entity'

export class FindAllCategoriesPrismaRepository
  implements FindAllCategoriesRepository
{
  constructor(private readonly prisma: DatabaseConnection) {}

  async findAll(
    queryParameters: FindAllCategoriesDTO
  ): Promise<Category[] | null> {
    return this.prisma.category.findMany({})
  }
}
