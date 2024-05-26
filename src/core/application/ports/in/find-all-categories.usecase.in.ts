import { FindAllCategoriesDTO } from 'adapters/driver/dtos/category/find-all-categories.dto'
import { Category } from 'core/domain/entities/category.entity'

export interface FindAllCategoriesUseCase {
  execute: (queryParameters: FindAllCategoriesDTO) => Promise<Category[] | null>
}
