import { CreateCategoryDTO } from 'adapters/driver/dtos/category/create-category.dto'
import { Category } from 'core/domain/entities/category.entity'

export interface CreateCategoryUseCase {
  execute: (body: CreateCategoryDTO) => Promise<Category> | never
}
