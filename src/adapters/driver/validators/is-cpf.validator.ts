import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'

export const IsSocialSecurityNumberValidator = (value: string) => {
  const isValid = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)

  if (!isValid) {
    throw new HttpException(
      StatusCode.BadRequest,
      ErrorMessage.InvalidParameters,
      'Informe um CPF válido'
    )
  }

  return value
}
