import { Order } from '../../../../core/domain/entities/order.entity'
import { Repositories } from './repositories.out'
import { CreateRepository } from '../../../../common/types/repositories.type'

export interface CreateOrderRepository
  extends Omit<Repositories<Order>, CreateRepository> {}
