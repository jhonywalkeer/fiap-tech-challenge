import { FindAllRepository } from 'common/types/repositories.type'
import { Repositories } from './repositories.out'
import { Order } from 'core/domain/entities/order.entity'

export interface FindAllOrdersRepository
  extends Omit<Repositories<Order[] | null>, FindAllRepository> {}
