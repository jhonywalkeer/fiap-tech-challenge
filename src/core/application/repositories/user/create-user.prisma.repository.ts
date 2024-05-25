import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { CreateUserDTO } from 'adapters/driver/dtos/users/create-user.dto'
import { CreateUserRepository } from 'core/application/ports/out/create-user.repository.out'

export class CreateUserPrismaRepository implements CreateUserRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async create(payload: CreateUserDTO): Promise<any> {
    return this.prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        social_security_number: payload.social_security_number
      }
    })
  }
}
