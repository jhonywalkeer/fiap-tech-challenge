import { Base } from './base.entity'

export class Category extends Base {
  description: string

  constructor(name: string, description: string, id?: string) {
    super(name, id)
    this.description = description
  }
}
