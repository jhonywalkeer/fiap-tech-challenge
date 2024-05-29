import { Repositories } from './repositories.out'
import { CreateRepository } from '../../../../common/types/repositories.type'
import { Category } from '../../../../core/domain/entities/category.entity'

export interface CreateCategoryRepository
  extends Omit<Repositories<Category>, CreateRepository> {}
