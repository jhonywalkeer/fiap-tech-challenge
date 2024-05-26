import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindUserByIdDTO } from 'adapters/driver/dtos/users/find-user-by-id.dto'
import { FindUserByIdRepository } from 'core/application/ports/out/find-user-by-id.repository.out'
import { User } from 'core/domain/entities/user.entity'

export class FindUserByIdPrismaRepository implements FindUserByIdRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async findById(queryParameters: FindUserByIdDTO): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        social_security_number: queryParameters.social_security_number
      }
    })
  }
}
