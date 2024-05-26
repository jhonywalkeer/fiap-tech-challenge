import { FindAllProductsDTO } from 'adapters/driver/dtos/product/find-all-product.dto'
import { Product } from 'core/domain/entities/product.entity'

export interface FindAllProductsUseCase {
  execute: (queryParameters: FindAllProductsDTO) => Promise<Product[] | null>
}
