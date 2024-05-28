import { HttpException } from '../../../common/utils/exceptions/http.exceptions'
import { Controller } from '../../../core/application/ports/in/controller.in'
import { NextFunction, Request, Response } from 'express'

export const ExpressRouteHttp = <T>(controller: Controller<T>) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    return Promise.resolve(
      controller.handle({
        query: request.query,
        params: request.params,
        body: request.body,
        headers: request.headers
      })
    )
      .then((controllerResponse) => {
        response
          .status(controllerResponse.statusCode)
          .json({ data: controllerResponse.body })
        return next()
      })
      .catch((error) => {
        if (error instanceof HttpException) {
          response.status(error.statusCode).json({
            status_code: error.statusCode,
            name: error.name,
            message: error.message
          })
        }
      })
  }
}
