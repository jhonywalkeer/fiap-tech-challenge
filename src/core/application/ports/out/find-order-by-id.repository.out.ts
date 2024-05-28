import { FindByIdRepository } from '../../../../common/types/repositories.type'
import { Repositories } from './repositories.out'
import { Order } from '../../../../core/domain/entities/order.entity'

export interface FindOrderByIdRepository
  extends Omit<Repositories<Order | null>, FindByIdRepository> {}
