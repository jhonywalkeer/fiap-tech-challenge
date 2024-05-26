import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindAllUsersController } from 'adapters/driver/controllers/users/find-all-users.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { FindAllUsersPrismaRepository } from 'core/application/repositories/user/find-all-users.prisma.repository'
import { FindAllUsersUC } from 'core/application/usecases/users/find-all-users.usecase'
import { User } from 'core/domain/entities/user.entity'

export const FindAllUsersControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const userRepository = new FindAllUsersPrismaRepository(databaseConnection)
  const findAllUsersUseCase = new FindAllUsersUC(userRepository)
  const genericSucessPresenter = new HttpGenericResponse<User[]>()
  const findAllUsersController = new FindAllUsersController(
    findAllUsersUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    userRepository,
    findAllUsersUseCase,
    findAllUsersController
  }
}
