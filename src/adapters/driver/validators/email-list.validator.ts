import { validEmails } from 'common/constants/valid-emails.constant'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'

export const EmailListValidator = (value: string | undefined) => {
  const isValid = validEmails.some((email) =>
    value?.toLowerCase().endsWith(email)
  )
  if (!isValid) {
    throw new HttpException(
      StatusCode.BadRequest,
      ErrorMessage.InvalidParameters,
      'E-mail deve ser válido (sendo incluso no mesmo um dos dominios listados: @gmail.com, @hotmail.com, @yahoo.com, @outlook.com, @live.com, @fiap.com) para que o cadastro seja efetuado'
    )
  }

  return value
}
