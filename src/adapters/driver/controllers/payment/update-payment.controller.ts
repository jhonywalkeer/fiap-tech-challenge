import { UpdatePaymentDTO } from '../../../../adapters/driver/dtos/payment/update-payment.dto'
import { ResponseHandler } from '../../../../adapters/driver/presenters/response-handler.presenter'
import { ErrorMessage } from '../../../../common/enums/error-message.enum'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { Controller } from '../../../../core/application/ports/in/controller.in'
import { HttpRequest } from '../../../../core/application/ports/in/http-request.in'
import { UpdatePaymentUseCase } from '../../../../core/application/ports/in/update-payment.usecase.in'
import { Payment } from '../../../../core/domain/entities/payment.entity'

export class UpdatePaymentController implements Controller<Payment> {
  constructor(
    private readonly updatePaymentUC: UpdatePaymentUseCase,
    private readonly updatePaymentPresenter: ResponseHandler<Payment>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const { payment_method, amount, status } = pathParameters.body
    const parameters = Object.assign(
      new UpdatePaymentDTO(id, payment_method, amount, status)
    )
    const payment: Payment | null =
      await this.updatePaymentUC.execute(parameters)

    if (!payment) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.PaymentNotFound
      )
    }

    return this.updatePaymentPresenter.response(payment, StatusCode.Sucess)
  }
}
