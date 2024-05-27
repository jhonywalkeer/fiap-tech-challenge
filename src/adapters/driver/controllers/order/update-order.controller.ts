import { UpdateOrderDTO } from 'adapters/driver/dtos/order/update-order.dto'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { UpdateOrderUseCase } from 'core/application/ports/in/update-order.usecase.in'
import { Order } from 'core/domain/entities/order.entity'

export class UpdateOrderController implements Controller<Order | never> {
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
    const category: Order | null = await this.updateOrderUC.execute(parameters)

    if (!category) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        'Pedido informado não encontrado'
      )
    }

    return this.updateOrderPresenter.response(category, StatusCode.Sucess)
  }
}
