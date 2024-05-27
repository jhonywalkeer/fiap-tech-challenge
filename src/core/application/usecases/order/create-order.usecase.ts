import { CreateOrderDTO } from 'adapters/driver/dtos/order/create-order.dto'
import { CreateOrderUseCase } from 'core/application/ports/in/create-order.usecase.in'
import { CreateOrderRepository } from 'core/application/ports/out/create-order.repository.out'
import { Order } from 'core/domain/entities/order.entity'

export class CreateOrderUC implements CreateOrderUseCase {
  constructor(private readonly createOrderRepository: CreateOrderRepository) {}
  async execute(body: CreateOrderDTO): Promise<Order> | never {
    return await this.createOrderRepository.create(body)
  }
}
