export class CreateUserDTO {
  name: string
  email: string
  social_security_number: string

  constructor(name: string, email: string, social_security_number: string) {
    this.name = name
    this.email = email
    this.social_security_number = social_security_number
  }
}
