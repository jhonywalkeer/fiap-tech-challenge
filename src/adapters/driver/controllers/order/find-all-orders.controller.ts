import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { Controller } from 'core/application/ports/in/controller.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'
import { Order } from 'core/domain/entities/order.entity'

export class FindAllOrdersController implements Controller<Order[]> {
  constructor(
    private readonly findAllOrdersUC: any,
    private readonly findAllOrdersPresenter: ResponseHandler<Order[]>
  ) {}
  async handle(queryParameters: HttpRequest) {
    const orders: Order[] | null = await this.findAllOrdersUC.execute(
      queryParameters.query
    )

    if (!orders) {
      throw new HttpException(
        StatusCode.NotFound,
        ErrorName.NotFoundInformation,
        'Pedidos não encontrados'
      )
    }
    return this.findAllOrdersPresenter.response(orders, StatusCode.Sucess)
  }
}
