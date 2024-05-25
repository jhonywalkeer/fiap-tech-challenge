import { validEmails } from 'common/constants/valid-emails.constant'

export const ValidateEmail = (email: string) => {
  const isValid = validEmails.map((email) => email.toLowerCase()).some((email) => email === email.toLowerCase())

  if (!isValid) {
    throw new Error('Invalid email')
  }

  return email
}
