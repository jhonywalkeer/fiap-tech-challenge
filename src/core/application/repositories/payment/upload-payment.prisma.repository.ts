import { PaymentCommunication } from '../../../../adapters/driven/infrastructure/gateway/payment/payment-communication'
import { DatabaseConnection } from '../../../../adapters/driven/infrastructure/persistence/database-connection'
import { UpdatePaymentDTO } from '../../../../adapters/driver/dtos/payment/update-payment.dto'
import { ErrorMessage } from '../../../../common/enums/error-message.enum'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { UpdatePaymentRepository } from '../../../../core/application/ports/out/update-payment.repository.out'
import { Payment } from '../../../../core/domain/entities/payment.entity'

export class UpdatePaymentPrismaRepository implements UpdatePaymentRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async update(pathParameters: UpdatePaymentDTO): Promise<Payment | null> {
    const QrCode = await PaymentCommunication()
    const findPayment = await this.prisma.payment.findFirst({
      select: {
        id: true
      },
      where: {
        id: pathParameters.id
      }
    })

    if (findPayment === null) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.PaymentNotFound
      )
    }

    const update = await this.prisma.payment.update({
      where: {
        id: pathParameters.id
      },
      data: {
        payment_method: pathParameters.payment_method,
        status: pathParameters.status
      }
    })

    return {
      id: update.id,
      user_id: update.user_id,
      payment_method: update.payment_method,
      amount: update.amount,
      status: update.status,
      payment_date: update.payment_date,
      qr_code: QrCode
    }
  }
}
