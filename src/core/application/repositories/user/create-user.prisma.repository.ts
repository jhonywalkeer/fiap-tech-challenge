import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { CreateUserDTO } from 'adapters/driver/dtos/users/create-user.dto'
import { CreateUserRepository } from 'core/application/ports/out/create-user.repository.out'
import { User } from 'core/domain/entities/user.entity'

export class CreateUserPrismaRepository implements CreateUserRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async create(body: CreateUserDTO): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        social_security_number: body.social_security_number
      }
    })
  }
}
