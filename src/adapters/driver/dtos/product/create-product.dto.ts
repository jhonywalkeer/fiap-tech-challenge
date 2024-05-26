import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { StatusCode } from 'common/enums/status-code.enum'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { IsStringValidator } from 'adapters/driver/validators/is-string.validator'

export class CreateProductDTO {
  name: string
  description: string
  category_id: string
  price: number

  constructor(
    name: string,
    description: string,
    category_id: string,
    price: number
  ) {
    if (!name || !description || !category_id) {
      throw new HttpException(
        StatusCode.BadRequest,
        ErrorMessage.InvalidBody,
        'Body precisa ser informado corretamente'
      )
    }
    IsStringValidator(name, 'name')
    IsStringValidator(description, 'description')
    IsStringValidator(category_id, 'category_id')

    this.name = name
    this.description = description
    this.category_id = category_id
    this.price = price
  }
}
