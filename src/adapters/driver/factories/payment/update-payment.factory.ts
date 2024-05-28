import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { UpdatePaymentController } from 'adapters/driver/controllers/payment/update-payment.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { UpdatePaymentPrismaRepository } from 'core/application/repositories/payment/upload-payment.prisma.repository'
import { UpdatePaymentUC } from 'core/application/usecases/payment/update-payment.usecase'
import { Payment } from 'core/domain/entities/payment.entity'

export const UpdatePaymentControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const paymentRepository = new UpdatePaymentPrismaRepository(
    databaseConnection
  )
  const updatePaymentUseCase = new UpdatePaymentUC(paymentRepository)
  const genericSucessPresenter = new HttpGenericResponse<Payment>()
  const updatePaymentController = new UpdatePaymentController(
    updatePaymentUseCase,
    genericSucessPresenter
  )

  return {
    databaseConnection,
    paymentRepository,
    updatePaymentUseCase,
    updatePaymentController
  }
}
