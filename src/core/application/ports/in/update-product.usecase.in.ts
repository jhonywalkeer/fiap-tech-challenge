import { UpdateProductDTO } from 'adapters/driver/dtos/product/update-product.dto'
import { Product } from 'core/domain/entities/product.entity'

export interface UpdateProductUseCase {
  execute: (pathParameters: UpdateProductDTO) => Promise<Product | null>
}
