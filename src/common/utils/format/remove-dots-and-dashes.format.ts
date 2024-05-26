export const removeDotsAndDashesFormat = (input: string): string => {
  const pattern = /[.-]/g

  return input.replace(pattern, '')
}
