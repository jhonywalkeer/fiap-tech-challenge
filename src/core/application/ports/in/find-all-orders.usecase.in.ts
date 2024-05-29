import { FindAllOrdersDTO } from '../../../../adapters/driver/dtos/order/find-all-orders.dto'
import { Order } from '../../../../core/domain/entities/order.entity'

export interface FindAllOrdersUseCase {
  execute: (queryParameters: FindAllOrdersDTO) => Promise<Order[] | null>
}
