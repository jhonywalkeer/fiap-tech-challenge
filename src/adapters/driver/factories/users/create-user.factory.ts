import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { CreateUserController } from 'adapters/driver/controllers/users/create-user.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { CreateUserPrismaRepository } from 'core/application/repositories/user/create-user.prisma.repository'
import { CreateUserUC } from 'core/application/usecases/users/create-user.usecase'
import { User } from 'core/domain/entities/user.entity'

export const CreateUserControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const userRepository = new CreateUserPrismaRepository(databaseConnection)
  const createUserUseCase = new CreateUserUC(userRepository)
  const genericSucessPresenter = new HttpGenericResponse<User>()
  const createUserController = new CreateUserController(createUserUseCase, genericSucessPresenter)

  return {
    databaseConnection,
    userRepository,
    createUserUseCase,
    createUserController
  }
}
