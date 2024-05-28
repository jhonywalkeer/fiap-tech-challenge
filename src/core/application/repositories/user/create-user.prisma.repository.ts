import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { CreateUserDTO } from 'adapters/driver/dtos/users/create-user.dto'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { CreateUserRepository } from 'core/application/ports/out/create-user.repository.out'
import { User } from 'core/domain/entities/user.entity'

export class CreateUserPrismaRepository implements CreateUserRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async create(body: CreateUserDTO): Promise<User> {
    const verifyIfUserExists = await this.prisma.user.findUnique({
      where: {
        social_security_number: body.social_security_number
      }
    })

    if (verifyIfUserExists) {
      throw new HttpException(
        StatusCode.Conflict,
        ErrorName.ResourceAlreadyExists,
        ErrorMessage.UserExists
      )
    }

    return this.prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        social_security_number: body.social_security_number
      }
    })
  }
}
