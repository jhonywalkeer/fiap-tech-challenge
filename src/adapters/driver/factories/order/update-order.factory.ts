import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { FindOrderByIdPrismaRepository } from 'core/application/repositories/order/find-order-by-id.prisma.repository'
import { UpdateOrderPrismaRepository } from 'core/application/repositories/order/update-order.prisma.repository'
import { UpdateOrderUC } from 'core/application/usecases/order/update-order.usecase'
import { Order } from 'core/domain/entities/order.entity'

export const UpdateOrderControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const findOrderById = new FindOrderByIdPrismaRepository(databaseConnection)
  const orderRepository = new UpdateOrderPrismaRepository(
    databaseConnection,
    findOrderById
  )
  const updateOrderUseCase = new UpdateOrderUC(orderRepository)
  const genericSucessPresenter = new HttpGenericResponse<Order>()
  const updateOrderController = new UpdateOrderController(
    updateOrderUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    orderRepository,
    updateOrderUseCase,
    updateOrderController
  }
}
