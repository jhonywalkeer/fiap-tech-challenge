import { FindAllOrdersDTO } from '../../../../adapters/driver/dtos/order/find-all-orders.dto'
import { FindAllOrdersUseCase } from '../../../../core/application/ports/in/find-all-orders.usecase.in'
import { FindAllOrdersRepository } from '../../../../core/application/ports/out/find-all-orders.repository.out'
import { Order } from '../../../../core/domain/entities/order.entity'


export class FindAllOrdersUC implements FindAllOrdersUseCase {
  constructor(
    private readonly findAllOrdersRepository: FindAllOrdersRepository
  ) {}
  async execute(queryParameters: FindAllOrdersDTO): Promise<Order[] | null> {
    return await this.findAllOrdersRepository.findAll(queryParameters)
  }
}
