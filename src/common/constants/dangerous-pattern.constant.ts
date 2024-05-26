export const dangerousPatterns: RegExp[] = [
  /<.*?>/g,
  /&.*?;/g,
  /['";]/g,
  /--/g,
  /\/\*.*?\*\//g,
  /#.*$/gm,
  /%/g,
  /\\/g
]
