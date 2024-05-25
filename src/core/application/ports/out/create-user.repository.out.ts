import { User } from 'core/domain/entities/user.entity'
import { Repositories } from './repositories.out'

export interface CreateUserRepository extends Omit<Repositories<User>, 'findAll' | 'findById' | 'update' | 'delete'> {}
