import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindUsersAllDTO } from 'adapters/driver/dtos/users/find-all-users.dto'
import { FindAllUsersRepository } from 'core/application/ports/out/find-all-users.repository.out'
import { User } from 'core/domain/entities/user.entity'

export class FindAllUsersPrismaRepository implements FindAllUsersRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async findAll(queryParameters: FindUsersAllDTO): Promise<User[] | null> {
    return this.prisma.user.findMany({})
  }
}
