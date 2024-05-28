import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { StatusCode } from 'common/enums/status-code.enum'
import { ErrorName } from 'common/enums/error-name.enum'
import { IsStringValidator } from 'adapters/driver/validators/is-string.validator'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { IsNumberValidator } from 'adapters/driver/validators/is-number.validator'

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
        ErrorName.InvalidBody,
        ErrorMessage.BodyInvalid
      )
    }
    IsStringValidator(name, 'name')
    IsStringValidator(description, 'description')
    IsStringValidator(category_id, 'category_id')
    IsNumberValidator(price, 'price')

    this.name = name
    this.description = description
    this.category_id = category_id
    this.price = price
  }
}
