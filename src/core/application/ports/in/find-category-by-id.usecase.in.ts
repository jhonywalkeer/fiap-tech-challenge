import { FindCategoryByIdDTO } from '../../../../adapters/driver/dtos/category/find-category-by-id.dto'
import { Category } from '../../../../core/domain/entities/category.entity'

export interface FindCategoryByIdUseCase {
  execute: (pathParameters: FindCategoryByIdDTO) => Promise<Category | null>
}
