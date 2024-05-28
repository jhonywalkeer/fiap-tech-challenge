import { SymbolsListValidator } from '../../../../adapters/driver/validators/symbols.validator'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'
import { RemoveDotsAndDashesFormat } from '../../../../common/utils/format/remove-dots-and-dashes.format'

export class FindUserByIdDTO {
  social_security_number: string

  constructor(social_security_number: string) {
    if (!social_security_number)
      throw new HttpException(
        StatusCode.BadRequest,
        ErrorName.InvalidParameters,
        'Você deve fornecer pelo menos um parâmetro para procurar um usuário'
      )

    social_security_number = RemoveDotsAndDashesFormat(social_security_number)
    SymbolsListValidator(social_security_number)

    this.social_security_number = social_security_number
  }
}
