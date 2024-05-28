import { FindByIdRepository } from '../../../../common/types/repositories.type'
import { Repositories } from './repositories.out'
import { User } from '../../../../core/domain/entities/user.entity'

export interface FindUserByIdRepository
  extends Omit<Repositories<User | null>, FindByIdRepository> {}
