import { CreateUserDTO } from 'adapters/driver/dtos/users/create-user.dto'
import { User } from 'core/domain/entities/user.entity'

export interface CreateUserUseCase {
  execute: (payload: CreateUserDTO) => Promise<User> | never
}
