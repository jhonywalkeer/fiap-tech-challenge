import { UpdatePaymentDTO } from 'adapters/driver/dtos/payment/update-payment.dto'
import { Payment } from 'core/domain/entities/payment.entity'

export interface UpdatePaymentUseCase {
  execute: (pathParameters: UpdatePaymentDTO) => Promise<Payment | null>
}
