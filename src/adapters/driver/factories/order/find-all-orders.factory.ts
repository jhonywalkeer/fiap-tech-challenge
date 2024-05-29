import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { FindAllOrdersController } from '../../../../adapters/driver/controllers/order/find-all-orders.controller'
import { HttpGenericResponse } from '../../../../adapters/driver/presenters/http-generic-response.presenter'
import { FindAllOrdersPrismaRepository } from '../../../../core/application/repositories/order/find-all-orders.prisma.repository'
import { FindAllOrdersUC } from '../../../../core/application/usecases/order/find-all-orders.usecase'
import { Order } from '../../../../core/domain/entities/order.entity'

export const FindAllOrdersControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const orderRepository = new FindAllOrdersPrismaRepository(databaseConnection)
  const findAllOrdersUseCase = new FindAllOrdersUC(orderRepository)
  const genericSucessPresenter = new HttpGenericResponse<Order[]>()
  const findAllOrdersController = new FindAllOrdersController(
    findAllOrdersUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    orderRepository,
    findAllOrdersUseCase,
    findAllOrdersController
  }
}
