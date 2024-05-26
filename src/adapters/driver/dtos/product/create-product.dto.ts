import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { StatusCode } from 'common/enums/status-code.enum'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { IsStringValidator } from 'adapters/driver/validators/is-string.validator'

export class CreateProductDTO {
  name: string
  description: string
  category: string
  price: number

  constructor(
    name: string,
    description: string,
    category: string,
    price: number
  ) {
    if (!name || !description || !category) {
      throw new HttpException(
        StatusCode.BadRequest,
        ErrorMessage.InvalidBody,
        'Body precisa ser informado corretamente'
      )
    }
    IsStringValidator(name, 'name')
    IsStringValidator(description, 'description')
    IsStringValidator(category, 'category')

    this.name = name
    this.description = description
    this.category = category
    this.price = price
  }
}
