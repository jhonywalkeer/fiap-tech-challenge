import { FindAllUsersDTO } from '../../../../adapters/driver/dtos/users/find-all-users.dto'
import { User } from '../../../../core/domain/entities/user.entity'

export interface FindAllUsersUseCase {
  execute: (queryParameters: FindAllUsersDTO) => Promise<User[] | null>
}
