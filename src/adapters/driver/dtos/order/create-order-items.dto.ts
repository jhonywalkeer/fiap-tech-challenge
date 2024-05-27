import { IsStringValidator } from 'adapters/driver/validators/is-string.validator'

export class CreateOrderItemsDTO {
  product_id: string
  quantity: number

  constructor(product_id: string, quantity: number) {
    IsStringValidator(product_id, 'product_id')
    IsStringValidator(quantity, 'quantity')

    this.product_id = product_id
    this.quantity = quantity
  }
}
