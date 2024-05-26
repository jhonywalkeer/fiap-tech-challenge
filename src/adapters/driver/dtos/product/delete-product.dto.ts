import { SymbolsListValidator } from 'adapters/driver/validators/symbols.validator'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { StatusCode } from 'common/enums/status-code.enum'
import { HttpException } from 'common/utils/exceptions/http.exceptions'

export class DeleteProductDTO {
  id: string

  constructor(id: string) {
    if (!id)
      throw new HttpException(
        StatusCode.BadRequest,
        ErrorMessage.InvalidParameters,
        'Você deve fornecer pelo menos um parâmetro para procurar um usuário'
      )
    SymbolsListValidator(id)

    this.id = id
  }
}
