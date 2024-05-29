import { UpdatePaymentDTO } from '../../../../adapters/driver/dtos/payment/update-payment.dto'
import { UpdatePaymentUseCase } from '../../../../core/application/ports/in/update-payment.usecase.in'
import { UpdatePaymentRepository } from '../../../../core/application/ports/out/update-payment.repository.out'
import { Payment } from '../../../../core/domain/entities/payment.entity'

export class UpdatePaymentUC implements UpdatePaymentUseCase {
  constructor(
    private readonly updatePaymentRepository: UpdatePaymentRepository
  ) {}
  async execute(pathParameters: UpdatePaymentDTO): Promise<Payment | null> {
    return await this.updatePaymentRepository.update(pathParameters)
  }
}
