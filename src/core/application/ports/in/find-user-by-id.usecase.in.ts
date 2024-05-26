import { FindUserByIdDTO } from 'adapters/driver/dtos/users/find-user-by-id.dto'
import { User } from 'core/domain/entities/user.entity'

export interface FindUserByIdUseCase {
  execute: (queryParameters: FindUserByIdDTO) => Promise<User | null>
}
