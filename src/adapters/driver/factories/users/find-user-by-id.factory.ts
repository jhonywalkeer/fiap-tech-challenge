import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { FindByIdController } from '../../../../adapters/driver/controllers/users/find-user-by-id.controller'
import { HttpGenericResponse } from '../../../../adapters/driver/presenters/http-generic-response.presenter'
import { FindUserByIdPrismaRepository } from '../../../../core/application/repositories/user/find-user-by-id.prisma.repository'
import { FindUserByIdUC } from '../../../../core/application/usecases/users/find-user-by-id.usecase'
import { User } from '../../../../core/domain/entities/user.entity'

export const FindUserByIdControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const userRepository = new FindUserByIdPrismaRepository(databaseConnection)
  const findUserByIdUserUseCase = new FindUserByIdUC(userRepository)
  const genericSucessPresenter = new HttpGenericResponse<User>()
  const findUserByIdController = new FindByIdController(
    findUserByIdUserUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    userRepository,
    findUserByIdUserUseCase,
    findUserByIdController
  }
}
