import { FindOrderByIdDTO } from '../../../../adapters/driver/dtos/order/find-order-by-id.dto'
import { FindOrderByIdUseCase } from '../../../../core/application/ports/in/find-orders-by-id.usecase.in'
import { FindOrderByIdRepository } from '../../../../core/application/ports/out/find-order-by-id.repository.out'
import { Order } from '../../../../core/domain/entities/order.entity'

export class FindOrderByIdUC implements FindOrderByIdUseCase {
  constructor(
    private readonly findOrderByIdRepository: FindOrderByIdRepository
  ) {}
  async execute(pathParameters: FindOrderByIdDTO): Promise<Order | null> {
    return await this.findOrderByIdRepository.findById(pathParameters)
  }
}
