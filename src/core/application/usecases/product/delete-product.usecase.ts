import { DeleteProductDTO } from '../../../../adapters/driver/dtos/product/delete-product.dto'
import { DeleteProductUseCase } from '../../../../core/application/ports/in/delete-product.usecase.in'
import { DeleteProductRepository } from '../../../../core/application/ports/out/delete-product.repository.out'

export class DeleteProductUC implements DeleteProductUseCase {
  constructor(
    private readonly deleteProductRepository: DeleteProductRepository
  ) {}
  async execute(pathParameters: DeleteProductDTO): Promise<void> {
    return await this.deleteProductRepository.delete(pathParameters)
  }
}
