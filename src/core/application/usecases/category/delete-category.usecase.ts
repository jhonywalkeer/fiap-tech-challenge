import { DeleteCategoryDTO } from 'adapters/driver/dtos/category/delete-category.dto'
import { DeleteCategoryUseCase } from 'core/application/ports/in/delete-category.usecase.in'
import { DeleteCategoryRepository } from 'core/application/ports/out/delete-category.repository.out'

export class DeleteCategoryUC implements DeleteCategoryUseCase {
  constructor(
    private readonly deleteCategoryRepository: DeleteCategoryRepository
  ) {}
  async execute(pathParameters: DeleteCategoryDTO): Promise<void> {
    return await this.deleteCategoryRepository.delete(pathParameters)
  }
}
