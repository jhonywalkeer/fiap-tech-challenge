import { SymbolsListValidator } from 'adapters/driver/validators/symbols.validator'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { removeDotsAndDashesFormat } from 'common/utils/format/remove-dots-and-dashes.format'

export class FindUserByIdDTO {
  social_security_number: string

  constructor(social_security_number: string) {
    if (!social_security_number)
      throw new HttpException(
        StatusCode.BadRequest,
        ErrorMessage.InvalidParameters,
        'Você deve fornecer pelo menos um parâmetro para procurar um usuário'
      )

    social_security_number = removeDotsAndDashesFormat(social_security_number)
    SymbolsListValidator(social_security_number)

    this.social_security_number = social_security_number
  }
}
