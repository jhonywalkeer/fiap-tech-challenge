import { UpdateOrderDTO } from '../../../../adapters/driver/dtos/order/update-order.dto'
import { Order } from '../../../../core/domain/entities/order.entity'

export interface UpdateOrderUseCase {
  execute: (pathParameters: UpdateOrderDTO) => Promise<Order | null>
}
