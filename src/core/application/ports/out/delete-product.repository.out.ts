import { DeleteRepository } from 'common/types/repositories.type'
import { Repositories } from './repositories.out'

export interface DeleteProductRepository
  extends Omit<Repositories<void>, DeleteRepository> {}
