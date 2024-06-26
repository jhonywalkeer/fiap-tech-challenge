import { IsStringValidator } from '../../../../adapters/driver/validators/is-string.validator'
import { ErrorName } from '../../../../common/enums/error-name.enum'
import { StatusCode } from '../../../../common/enums/status-code.enum'
import { HttpException } from '../../../../common/utils/exceptions/http.exceptions'

export class CreateCategoryDTO {
  name: string
  description: string

  constructor(name: string, description: string) {
    if (!name || !description) {
      throw new HttpException(
        StatusCode.BadRequest,
        ErrorName.InvalidBody,
        'Body precisa ser informado corretamente'
      )
    }
    IsStringValidator(name, 'name')
    IsStringValidator(description, 'description')

    this.name = name
    this.description = description
  }
}
