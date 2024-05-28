import { DeleteRepository } from '../../../../common/types/repositories.type'
import { Repositories } from './repositories.out'

export interface DeleteOrderRepository
  extends Omit<Repositories<void>, DeleteRepository> {}
