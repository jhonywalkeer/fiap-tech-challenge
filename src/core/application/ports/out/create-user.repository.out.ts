import { User } from 'core/domain/entities/user.entity'
import { Repositories } from './repositories.out'
import { CreateRepository } from 'common/types/repositories.type'

export interface CreateUserRepository
  extends Omit<Repositories<User>, CreateRepository> {}
