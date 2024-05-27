import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { ErrorName } from 'common/enums/error-name.enum'
import { Order } from 'core/domain/entities/order.entity'
import { FindOrderByIdDTO } from 'adapters/driver/dtos/order/find-order-by-id.dto'

export class FindOrderByIdController implements Controller<Order | never> {
  constructor(
    private readonly findOrderByIdUC: any,
    private readonly findOrderByIdPresenter: ResponseHandler<Order>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const parameters = Object.assign(new FindOrderByIdDTO(id))
    const order: Order | null = await this.findOrderByIdUC.execute(parameters)

    if (!order) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        'Pedido informado não encontrado'
      )
    }

    return this.findOrderByIdPresenter.response(order, StatusCode.Sucess)
  }
}
