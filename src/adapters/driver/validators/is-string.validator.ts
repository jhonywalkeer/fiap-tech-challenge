import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'

export const IsStringValidator = (value: any, identifier: string) => {
  if (typeof value !== 'string') {
    throw new HttpException(
      StatusCode.BadRequest,
      ErrorMessage.InvalidParameters,
      `O campo ${identifier} deve ser uma string`
    )
  }

  return value
}
