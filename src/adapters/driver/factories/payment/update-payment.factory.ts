import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { UpdatePaymentController } from 'adapters/driver/controllers/payment/update-payment.controller'
import { HttpGenericResponse } from 'adapters/driver/presenters/http-generic-response.presenter'
import { Payment } from 'core/domain/entities/payment.entity'

export const UpdatePaymentControllerFactory = () => {
  const databaseConnection = new DatabaseConnection()
  const findPaymentById = ''
  const paymentRepository = ''
  const updatePaymentUseCase = ''
  const genericSucessPresenter = new HttpGenericResponse<Payment>()
  const updatePaymentController = ''

  return {
    databaseConnection,
    paymentRepository,
    updatePaymentUseCase,
    updatePaymentController
  }
}
