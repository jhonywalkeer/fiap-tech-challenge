import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { dangerousPatterns } from '../../../common/constants/dangerous-pattern.constant'

export const SymbolsListValidator = (input: string) => {
  for (const pattern of dangerousPatterns) {
    if (pattern.test(input)) {
      throw new HttpException(
        StatusCode.BadRequest,
        ErrorMessage.InvalidParameters,
        `Informe os parâmetros corretamentos para a requisição`
      )
    }
  }
  return input
}
