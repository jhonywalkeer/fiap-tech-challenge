import { UpdateRepository } from '../../../../common/types/repositories.type'
import { Repositories } from './repositories.out'
import { Payment } from '../../../../core/domain/entities/payment.entity'

export interface UpdatePaymentRepository
  extends Omit<Repositories<Payment | null>, UpdateRepository> {}
