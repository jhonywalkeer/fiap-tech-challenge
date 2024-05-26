import { FindAllCategoriesDTO } from 'adapters/driver/dtos/category/find-all-categories.dto'
import { FindAllCategoriesUseCase } from 'core/application/ports/in/find-all-categories.usecase.in'
import { FindAllCategoriesRepository } from 'core/application/ports/out/find-all-categories.repository.out'
import { Category } from 'core/domain/entities/category.entity'

export class FindAllCategoriesUC implements FindAllCategoriesUseCase {
  constructor(
    private readonly findAllCategoriesRepository: FindAllCategoriesRepository
  ) {}
  async execute(
    queryParameters: FindAllCategoriesDTO
  ): Promise<Category[] | null> {
    return await this.findAllCategoriesRepository.findAll(queryParameters)
  }
}
