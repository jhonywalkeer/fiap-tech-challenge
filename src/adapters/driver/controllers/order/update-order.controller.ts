import { UpdateOrderDTO } from 'adapters/driver/dtos/order/update-order.dto'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { UpdateOrderUseCase } from 'core/application/ports/in/update-order.usecase.in'
import { Order } from 'core/domain/entities/order.entity'

export class UpdateOrderController implements Controller<Order> {
  constructor(
    private readonly updateOrderUC: UpdateOrderUseCase,
    private readonly updateOrderPresenter: ResponseHandler<Order>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const { items, observation, customer, payment } = pathParameters.body
    const parameters = Object.assign(
      new UpdateOrderDTO(id, items, payment, observation, customer)
    )
    const order: Order | null = await this.updateOrderUC.execute(parameters)

    if (!order) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        ErrorMessage.OrderNotFound
      )
    }

    return this.updateOrderPresenter.response(order, StatusCode.Sucess)
  }
}
