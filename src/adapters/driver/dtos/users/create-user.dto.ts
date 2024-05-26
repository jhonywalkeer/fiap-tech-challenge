import { HttpException } from 'common/utils/exceptions/http.exceptions'
import { StatusCode } from 'common/enums/status-code.enum'
import { ErrorMessage } from 'common/enums/error-message.enum'
import { IsStringValidator } from 'adapters/driver/validators/is-string.validator'
import { EmailListValidator } from 'adapters/driver/validators/email-list.validator'
import { IsSocialSecurityNumberValidator } from 'adapters/driver/validators/is-cpf.validator'

export class CreateUserDTO {
  name: string
  email: string
  social_security_number: string

  constructor(name: string, email: string, social_security_number: string) {
    if (!name || !email || !social_security_number) {
      throw new HttpException(
        StatusCode.BadRequest,
        ErrorMessage.InvalidPayload,
        'Payload precisa ser informado corretamente'
      )
    }
    IsStringValidator(name, 'name')
    IsStringValidator(email, 'email')
    EmailListValidator(email)
    IsStringValidator(social_security_number, 'social_security_number')
    IsSocialSecurityNumberValidator(social_security_number)

    this.name = name
    this.email = email
    this.social_security_number = social_security_number
  }
}
