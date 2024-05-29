import { DeleteOrderDTO } from '../../../../adapters/driver/dtos/order/delete-order.dto'

export interface DeleteOrderUseCase {
  execute: (pathParameters: DeleteOrderDTO) => Promise<void>
}
