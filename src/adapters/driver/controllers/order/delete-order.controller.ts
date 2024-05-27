import { DeleteOrderDTO } from 'adapters/driver/dtos/order/delete-order.dto'
import { ResponseHandler } from 'adapters/driver/presenters/response-handler.presenter'
import { StatusCode } from 'common/enums/status-code.enum'
import { Controller } from 'core/application/ports/in/controller.in'
import { DeleteOrderUseCase } from 'core/application/ports/in/delete-order.usecase.in'
import { HttpRequest } from 'core/application/ports/in/http-request.in'

export class DeleteOrderController implements Controller<void | never> {
  constructor(
    private readonly deleteOrderUC: DeleteOrderUseCase,
    private readonly deleteOrderPresenter: ResponseHandler<void>
  ) {}
  async handle(pathParameters: HttpRequest) {
    const { id } = pathParameters.params
    const payload = Object.assign(new DeleteOrderDTO(id))

    const product = await this.deleteOrderUC.execute(payload)
    Promise.resolve(product)

    return this.deleteOrderPresenter.response(product, StatusCode.Accepted)
  }
}
