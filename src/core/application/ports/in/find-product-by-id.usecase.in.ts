import { FindProductByIdDTO } from 'adapters/driver/dtos/product/find-user-by-id.dto'
import { Product } from 'core/domain/entities/product.entity'

export interface FindProductByIdUseCase {
  execute: (pathParameters: FindProductByIdDTO) => Promise<Product | null>
}
