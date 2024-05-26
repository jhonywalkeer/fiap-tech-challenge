export interface Repositories<T> {
  create(body: T): Promise<T>
  findAll(parameters: any): Promise<T | null>
  findById(id?: any): Promise<T | null>
  update(id: any, entity: T): Promise<T>
  delete(id: any): Promise<void>
}
