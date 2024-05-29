import { UpdateProductDTO } from 'adapters/driver/dtos/product/update-product.dto'
import { UpdateProductUseCase } from 'core/application/ports/in/update-product.usecase.in'
import { UpdateProductRepository } from 'core/application/ports/out/update-product.repository.out'
import { Product } from '../../../../core/domain/entities/product.entity'

export class UpdateProductUC implements UpdateProductUseCase {
  constructor(
    private readonly updateProductRepository: UpdateProductRepository
  ) {}
  async execute(pathParameters: UpdateProductDTO): Promise<Product | null> {
    return await this.updateProductRepository.update(pathParameters)
  }
}
