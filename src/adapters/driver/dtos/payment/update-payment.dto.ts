import { IdentifierDTO } from '../common/identifier.dto'

export class UpdatePaymentDTO extends IdentifierDTO {
  payment_method: string
  amount: number
  status: string

  constructor(
    id: string,
    payment_method: string,
    amount: number,
    status: string
  ) {
    super(id)
    this.payment_method = payment_method
    this.amount = amount
    this.status = status
  }
}
