import { UpdateOrderDTO } from '../../../../adapters/driver/dtos/order/update-order.dto'
import { UpdateOrderUseCase } from '../../../../core/application/ports/in/update-order.usecase.in'
import { UpdateOrderRepository } from '../../../../core/application/ports/out/update-order.repository.out'
import { Order } from '../../../../core/domain/entities/order.entity'

export class UpdateOrderUC implements UpdateOrderUseCase {
  constructor(private readonly updateOrderRepository: UpdateOrderRepository) {}
  async execute(pathParameters: UpdateOrderDTO): Promise<Order | null> {
    return await this.updateOrderRepository.update(pathParameters)
  }
}
