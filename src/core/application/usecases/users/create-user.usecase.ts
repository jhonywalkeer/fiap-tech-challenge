import { CreateUserDTO } from '../../../../adapters/driver/dtos/users/create-user.dto'
import { CreateUserUseCase } from '../../../../core/application/ports/in/create-user.usecase.in'
import { CreateUserRepository } from '../../../../core/application/ports/out/create-user.repository.out'
import { User } from '../../../../core/domain/entities/user.entity'

export class CreateUserUC implements CreateUserUseCase {
  constructor(private readonly createUserRepository: CreateUserRepository) {}
  async execute(body: CreateUserDTO): Promise<User> | never {
    return await this.createUserRepository.create(body)
  }
}
