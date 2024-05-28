import { SymbolsListValidator } from '../../../../adapters/driver/validators/symbols.validator'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'

export class IdentifierDTO {
  id: string

  constructor(id: string) {
    if (!id)
      throw new HttpException(
        StatusCode.BadRequest,
        ErrorName.InvalidParameters,
        'Você deve fornecer pelo menos um parâmetro para procurar um usuário'
      )
    SymbolsListValidator(id)

    this.id = id
  }
}
