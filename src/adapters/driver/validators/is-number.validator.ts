import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'

export const IsNumberValidator = (value: any, identifier: string) => {
  if (typeof value !== 'number') {
    throw new HttpException(
      StatusCode.BadRequest,
      ErrorName.InvalidParameters,
      `O campo ${identifier} deve ser um numero`
    )
  }
  return value
}
