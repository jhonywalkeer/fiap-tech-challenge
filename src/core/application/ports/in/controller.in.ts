import { HttpResponse } from '../out/http-response.out'
import { HttpRequest } from './http-request.in'

export interface Controller<T = unknown> {
  handle: (request: HttpRequest) => Promise<HttpResponse<T>>
}
