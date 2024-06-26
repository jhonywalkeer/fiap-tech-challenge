import { Base } from './base.entity'
import { Category } from './category.entity'

export class Product extends Base {
  description: string
  category: Category
  price: number
  created_at?: Date
  updated_at?: Date

  constructor(
    name: string,
    description: string,
    category: Category,
    price: number,
    id?: string,
    created_at?: Date,
    updated_at?: Date
  ) {
    super(name, id)
    this.description = description
    this.category = category
    this.price = price
    this.created_at = created_at
    this.updated_at = updated_at
  }
}
