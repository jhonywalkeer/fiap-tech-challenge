import { Product } from '../../../../core/domain/entities/product.entity'
import { Repositories } from './repositories.out'
import { CreateRepository } from '../../../../common/types/repositories.type'

export interface CreateProductRepository
  extends Omit<Repositories<Product>, CreateRepository> {}
