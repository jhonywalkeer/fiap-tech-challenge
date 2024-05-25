export interface Repositories<T> {
  create(payload: T): Promise<T>
  findAll(): Promise<T[]>
  findById(id?: string): Promise<T | null>
  update(id: string, entity: T): Promise<T>
  delete(id: string): Promise<void>
}
