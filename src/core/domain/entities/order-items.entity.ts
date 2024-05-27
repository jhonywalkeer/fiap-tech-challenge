import { OrderOptions } from './order-options.entity'

export class OrderItems {
  product_id: string // Product ID
  name: string // Product Name
  quantity: 0
  options: OrderOptions
  price: 0
  amount: 0
}
