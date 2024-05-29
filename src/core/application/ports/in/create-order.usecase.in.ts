import { CreateOrderDTO } from '../../../../adapters/driver/dtos/order/create-order.dto'
import { Order } from '../../../../core/domain/entities/order.entity'

export interface CreateOrderUseCase {
  execute: (body: CreateOrderDTO) => Promise<Order> | never
}
