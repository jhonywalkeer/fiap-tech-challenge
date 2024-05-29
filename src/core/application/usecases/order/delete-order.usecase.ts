import { DeleteOrderDTO } from '../../../../adapters/driver/dtos/order/delete-order.dto'
import { DeleteOrderUseCase } from '../../../../core/application/ports/in/delete-order.usecase.in'
import { DeleteOrderRepository } from '../../../../core/application/ports/out/delete-order.repository.out'

export class DeleteOrderUC implements DeleteOrderUseCase {
  constructor(private readonly deleteOrderRepository: DeleteOrderRepository) {}
  async execute(pathParameters: DeleteOrderDTO): Promise<void> {
    return await this.deleteOrderRepository.delete(pathParameters)
  }
}
