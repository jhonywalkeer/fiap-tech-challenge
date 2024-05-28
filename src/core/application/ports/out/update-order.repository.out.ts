import { UpdateRepository } from '../../../../common/types/repositories.type'
import { Repositories } from './repositories.out'
import { Order } from '../../../../core/domain/entities/order.entity'

export interface UpdateOrderRepository
  extends Omit<Repositories<Order | null>, UpdateRepository> {}
