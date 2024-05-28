import { CreateOrderDTO } from '../../../../adapters/driver/dtos/order/create-order.dto'
import { ResponseHandler } from '../../../../adapters/driver/presenters/response-handler.presenter'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { Controller } from '../../../../core/application/ports/in/controller.in'
import { CreateOrderUseCase } from '../../../../core/application/ports/in/create-order.usecase.in'
import { HttpRequest } from '../../../../core/application/ports/in/http-request.in'
import { Order } from '../../../../core/domain/entities/order.entity'

export class CreateOrderController implements Controller<Order> {
  constructor(
    private readonly createOrderUC: CreateOrderUseCase,
    private readonly createOrderPresenter: ResponseHandler<Order>
  ) {}
  async handle(body: HttpRequest) {
    const { items, observation, customer, payment } = body.body
    const payload = Object.assign(
      new CreateOrderDTO(items, payment, observation, customer)
    )
    const order: Order = await this.createOrderUC.execute(payload)
    return this.createOrderPresenter.response(order, StatusCode.Created)
  }
}
