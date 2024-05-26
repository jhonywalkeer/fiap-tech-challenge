export class Product {
  id?: string
  name: string
  description: string
  category: string

  constructor(
    name: string,
    description: string,
    category: string,
    id?: string
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.category = category
  }
}
