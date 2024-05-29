import { OrderItems } from './order-items.entity'
import { Payment } from './payment.entity'

export class Order {
  id?: string
  order?: string
  status?: string
  items: OrderItems[]
  customer?: string
  payment?: Payment
  observation?: string | null
}
