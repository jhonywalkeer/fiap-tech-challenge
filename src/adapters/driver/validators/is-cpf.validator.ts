import { ErrorName } from 'common/enums/error-name.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'

export const IsSocialSecurityNumberValidator = (value: string) => {
  const removeSpecialCharacters = value.replace(/\./g, '').replace(/-/g, '')
  const size = value.length === 11

  if (!removeSpecialCharacters || !size) {
    throw new HttpException(
      StatusCode.BadRequest,
      ErrorName.InvalidParameters,
      'Informe um CPF válido'
    )
  }

  return value
}
