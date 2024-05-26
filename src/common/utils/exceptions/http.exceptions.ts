import { StatusCode } from 'common/enums/status-code.enum'

export class HttpException extends Error {
  statusCode: number
  stack: string | undefined

  constructor(
    statusCode: number,
    name: string,
    message: string,
    stack?: string
  ) {
    super(message)
    this.statusCode = statusCode
    this.name = name

    if (statusCode === StatusCode.InternalServerError) {
      this.stack = stack
    }
  }
}
