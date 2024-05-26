export class User {
  id?: string
  name: string
  email: string
  social_security_number: string

  constructor(
    name: string,
    email: string,
    social_security_number: string,
    id?: string
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.social_security_number = social_security_number
  }
}
