import { UpdateCategoryDTO } from 'adapters/driver/dtos/category/update-category.dto'
import { UpdateCategoryUseCase } from 'core/application/ports/in/update-category.usecase.in'
import { UpdateCategoryRepository } from 'core/application/ports/out/update-category.repository.out'
import { Category } from 'core/domain/entities/category.entity'

export class UpdateCategoryUC implements UpdateCategoryUseCase {
  constructor(
    private readonly updateCategoryRepository: UpdateCategoryRepository
  ) {}
  async execute(pathParameters: UpdateCategoryDTO): Promise<Category | null> {
    return await this.updateCategoryRepository.update(pathParameters)
  }
}
