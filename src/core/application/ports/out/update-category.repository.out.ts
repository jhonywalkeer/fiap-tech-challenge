import { UpdateRepository } from 'common/types/repositories.type'
import { Repositories } from './repositories.out'
import { Category } from 'core/domain/entities/category.entity'

export interface UpdateCategoryRepository
  extends Omit<Repositories<Category | null>, UpdateRepository> {}
