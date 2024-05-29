import { IdentifierDTO } from '../common/identifier.dto'
import { CreatePaymentMethodDTO } from '../payment/create-payment-method.dto'
import { CreateOrderItemsDTO } from './create-order-items.dto'

export class UpdateOrderDTO extends IdentifierDTO {
  items: CreateOrderItemsDTO[]
  payment: CreatePaymentMethodDTO
  customer?: string
  observation?: string

  constructor(
    id: string,
    items: CreateOrderItemsDTO[],
    payment: CreatePaymentMethodDTO,
    observation?: string,
    customer?: string
  ) {
    super(id)
    this.items = items
    this.payment = payment
    this.observation = observation
    this.customer = customer
  }
}
