import { UpdateCategoryDTO } from 'adapters/driver/dtos/category/update-category.dto'
import { Category } from 'core/domain/entities/category.entity'

export interface UpdateCategoryUseCase {
  execute: (pathParameters: UpdateCategoryDTO) => Promise<Category | null>
}
