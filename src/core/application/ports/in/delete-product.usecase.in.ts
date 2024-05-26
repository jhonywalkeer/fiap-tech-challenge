import { DeleteProductDTO } from 'adapters/driver/dtos/product/delete-product.dto'

export interface DeleteProductUseCase {
  execute: (pathParameters: DeleteProductDTO) => Promise<void>
}
