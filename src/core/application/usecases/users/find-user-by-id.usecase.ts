import { FindUserByIdDTO } from 'adapters/driver/dtos/users/find-user-by-id.dto'
import { FindUserByIdUseCase } from 'core/application/ports/in/find-user-by-id.usecase.in'
import { FindUserByIdRepository } from 'core/application/ports/out/find-user-by-id.repository.out'
import { User } from 'core/domain/entities/user.entity'

export class FindUserByIdUC implements FindUserByIdUseCase {
  constructor(
    private readonly findUserByIdRepository: FindUserByIdRepository
  ) {}
  async execute(pathParameters: FindUserByIdDTO): Promise<User | null> {
    return await this.findUserByIdRepository.findById(pathParameters)
  }
}
