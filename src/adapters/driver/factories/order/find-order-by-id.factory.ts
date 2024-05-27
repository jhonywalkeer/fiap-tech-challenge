import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { FindOrderByIdController } from 'adapters/driver/controllers/order/find-order-by-id.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { FindOrderByIdPrismaRepository } from 'core/application/repositories/order/find-order-by-id.prisma.repository'
import { FindOrderByIdUC } from 'core/application/usecases/order/find-order-by-id.usecase'
import { Order } from 'core/domain/entities/order.entity'

export const FindOrderByIdControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const productRepository = new FindOrderByIdPrismaRepository(
    databaseConnection
  )
  const findOrderByIdUseCase = new FindOrderByIdUC(productRepository)
  const genericSucessPresenter = new HttpGenericResponse<Order>()
  const findOrderByIdController = new FindOrderByIdController(
    findOrderByIdUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    productRepository,
    findOrderByIdUseCase,
    findOrderByIdController
  }
}
