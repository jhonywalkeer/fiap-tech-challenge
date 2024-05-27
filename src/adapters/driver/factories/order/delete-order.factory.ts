import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { DeleteOrderPrismaRepository } from 'core/application/repositories/order/delete-order.prisma.repository'
import { FindOrderByIdPrismaRepository } from 'core/application/repositories/order/find-order-by-id.prisma.repository'
import { DeleteOrderUC } from 'core/application/usecases/order/delete-order.usecase'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { DeleteOrderController } from 'adapters/driver/controllers/order/delete-order.controller'

export const DeleteOrderControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const findOrderById = new FindOrderByIdPrismaRepository(databaseConnection)
  const orderRepository = new DeleteOrderPrismaRepository(
    databaseConnection,
    findOrderById
  )
  const deleteOrderUseCase = new DeleteOrderUC(orderRepository)
  const genericSucessPresenter = new HttpGenericResponse<void>()
  const deleteOrderController = new DeleteOrderController(
    deleteOrderUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    orderRepository,
    deleteOrderUseCase,
    deleteOrderController
  }
}
