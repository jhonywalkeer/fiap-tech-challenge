import { FindAllRepository } from 'common/types/repositories.type'
import { Repositories } from './repositories.out'
import { User } from 'core/domain/entities/user.entity'

export interface FindAllUsersRepository
  extends Omit<Repositories<User[] | null>, FindAllRepository> {}
