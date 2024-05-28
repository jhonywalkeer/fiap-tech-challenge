import { FindCategoryByIdDTO } from '../../../../adapters/driver/dtos/category/find-category-by-id.dto'
import { FindCategoryByIdUseCase } from '../../../../core/application/ports/in/find-category-by-id.usecase.in'
import { FindCategoryByIdRepository } from '../../../../core/application/ports/out/find-category-by-id.repository.out'
import { Category } from '../../../../core/domain/entities/category.entity'

export class FindCategoryByIdUC implements FindCategoryByIdUseCase {
  constructor(
    private readonly findCategoryByIdRepository: FindCategoryByIdRepository
  ) {}
  async execute(pathParameters: FindCategoryByIdDTO): Promise<Category | null> {
    return await this.findCategoryByIdRepository.findById(pathParameters)
  }
}
