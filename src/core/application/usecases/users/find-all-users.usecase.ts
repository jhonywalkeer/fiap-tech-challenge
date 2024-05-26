import { FindUsersAllDTO } from 'adapters/driver/dtos/users/find-all-users.dto'
import { FindAllUsersUseCase } from 'core/application/ports/in/find-all-users.usecase.in'
import { FindAllUsersRepository } from 'core/application/ports/out/find-all-users.repository.out'
import { User } from 'core/domain/entities/user.entity'

export class FindAllUsersUC implements FindAllUsersUseCase {
  constructor(
    private readonly findAllUsersRepository: FindAllUsersRepository
  ) {}
  async execute(queryParameters: FindUsersAllDTO): Promise<User[] | null> {
    return await this.findAllUsersRepository.findAll(queryParameters)
  }
}
