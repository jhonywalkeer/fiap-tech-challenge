import { FindAllProductsDTO } from '../../../../adapters/driver/dtos/product/find-all-product.dto'
import { FindAllProductsUseCase } from '../../../../core/application/ports/in/find-all-products.usecase.in'
import { FindAllProductRepository } from '../../../../core/application/ports/out/find-all-products.repository.out'
import { Product } from '../../../../core/domain/entities/product.entity'

export class FindAllProductsUC implements FindAllProductsUseCase {
  constructor(
    private readonly findAllUsersRepository: FindAllProductRepository
  ) {}
  async execute(
    queryParameters: FindAllProductsDTO
  ): Promise<Product[] | null> {
    return await this.findAllUsersRepository.findAll(queryParameters)
  }
}
