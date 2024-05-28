import { DatabaseConnection } from 'adapters/driven/infrastructure/persistence/database-connection'
import { UpdatePaymentDTO } from 'adapters/driver/dtos/payment/update-payment.dto'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { UpdatePaymentRepository } from 'core/application/ports/out/update-payment.repository.out'
import { Payment } from 'core/domain/entities/payment.entity'

export class UpdatePaymentPrismaRepository implements UpdatePaymentRepository {
  constructor(private readonly prisma: DatabaseConnection) {}

  async update(pathParameters: UpdatePaymentDTO): Promise<Payment | null> {
    const order = await this.prisma.payment.findUnique({
      id: pathParameters.id
    })

    if (order === null) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        'Pedido informado não existe'
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

    const findPayment = await this.prisma.payment.findUnique({
      id: update.id
    })

    return findPayment
  }
}
