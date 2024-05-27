import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { CreateOrderController } from 'adapters/driver/controllers/order/create-order.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { CreateOrderPrismaRepository } from 'core/application/repositories/order/create-order.prisma.repository'
import { CreateOrderUC } from 'core/application/usecases/order/create-order.usecase'
import { Order } from 'core/domain/entities/order.entity'

export const CreateOrderControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const orderRepository = new CreateOrderPrismaRepository(databaseConnection)
  const createOrderUseCase = new CreateOrderUC(orderRepository)
  const genericSucessPresenter = new HttpGenericResponse<Order>()
  const createOrderController = new CreateOrderController(
    createOrderUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    orderRepository,
    createOrderUseCase,
    createOrderController
  }
}
