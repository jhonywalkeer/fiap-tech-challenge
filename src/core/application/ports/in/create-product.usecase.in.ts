import { CreateProductDTO } from 'adapters/driver/dtos/product/create-product.dto'
import { Product } from 'core/domain/entities/product.entity'

export interface CreateProductUseCase {
  execute: (body: CreateProductDTO) => Promise<Product> | never
}
