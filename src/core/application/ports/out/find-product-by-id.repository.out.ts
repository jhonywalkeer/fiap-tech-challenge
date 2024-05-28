import { FindByIdRepository } from '../../../../common/types/repositories.type'
import { Repositories } from './repositories.out'
import { Product } from '../../../../core/domain/entities/product.entity'

export interface FindProductByIdRepository
  extends Omit<Repositories<Product | null>, FindByIdRepository> {}
