import { Base } from './base.entity'

export class Product extends Base {
  description: string
  category_id: string
  price: number

  constructor(
    name: string,
    description: string,
    category_id: string,
    price: number,
    id?: string
  ) {
    super(name, id)
    this.description = description
    this.category_id = category_id
    this.price = price
  }
}
