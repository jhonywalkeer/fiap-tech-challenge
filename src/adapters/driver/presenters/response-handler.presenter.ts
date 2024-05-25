import { HttpResponse } from 'core/application/ports/out/http-response.out'

export interface ResponseHandler<T = any> {
  response(body: T, statusCode?: number, message?: string): Promise<HttpResponse<T>>
}
