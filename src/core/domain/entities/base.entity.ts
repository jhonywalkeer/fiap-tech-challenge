export class Base {
  id?: string
  name: string

  constructor(name: string, id?: string) {
    this.id = id
    this.name = name
  }
}
