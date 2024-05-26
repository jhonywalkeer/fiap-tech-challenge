export class PaginateDTO {
  page: number
  limit: number
  sort: string
  order: string

  constructor(page: number, limit: number, sort: string, order: string) {
    this.page = page
    this.limit = limit
    this.sort = sort
    this.order = order
  }
}
