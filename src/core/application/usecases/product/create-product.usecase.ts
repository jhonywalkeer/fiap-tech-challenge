import { CreateProductDTO } from 'adapters/driver/dtos/product/create-product.dto'
import { CreateProductUseCase } from 'core/application/ports/in/create-product.usecase.in'
import { CreateProductRepository } from 'core/application/ports/out/create-product.repository.out'
import { Product } from 'core/domain/entities/product.entity'

export class CreateProductUC implements CreateProductUseCase {
  constructor(
    private readonly createProductRepository: CreateProductRepository
  ) {}
  async execute(body: CreateProductDTO): Promise<Product> | never {
    return await this.createProductRepository.create(body)
  }
}
