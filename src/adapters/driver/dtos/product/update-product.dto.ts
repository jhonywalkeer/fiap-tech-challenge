import { IdentifierDTO } from '../common/identifier.dto'

export class UpdateProductDTO extends IdentifierDTO {
  name: string
  description: string
  price: number
  category: string

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    category: string
  ) {
    super(id)
    this.name = name
    this.description = description
    this.price = price
    this.category = category
  }
}
