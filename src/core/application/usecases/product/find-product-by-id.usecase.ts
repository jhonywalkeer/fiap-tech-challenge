import { FindProductByIdDTO } from 'adapters/driver/dtos/product/find-product-by-id.dto'
import { FindProductByIdUseCase } from 'core/application/ports/in/find-product-by-id.usecase.in'
import { FindProductByIdRepository } from 'core/application/ports/out/find-product-by-id.repository.out'
import { Product } from '../../../../core/domain/entities/product.entity'

export class FindProductByIdUC implements FindProductByIdUseCase {
  constructor(
    private readonly findProductByIdRepository: FindProductByIdRepository
  ) {}
  async execute(pathParameters: FindProductByIdDTO): Promise<Product | null> {
    return await this.findProductByIdRepository.findById(pathParameters)
  }
}
