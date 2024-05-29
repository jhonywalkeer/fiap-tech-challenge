import { FindByIdRepository } from '../../../../common/types/repositories.type'
import { Repositories } from './repositories.out'
import { Category } from '../../../../core/domain/entities/category.entity'

export interface FindCategoryByIdRepository
  extends Omit<Repositories<Category | null>, FindByIdRepository> {}
