import { FindOrderByIdDTO } from 'adapters/driver/dtos/order/find-order-by-id.dto'
import { Order } from 'core/domain/entities/order.entity'

export interface FindOrderByIdUseCase {
  execute: (pathParameters: FindOrderByIdDTO) => Promise<Order | null>
}
