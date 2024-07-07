export const truncateText = (text: string, maxLength: number, full?: boolean): string => {
  if (full === true) {
    maxLength = text.length
  }
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}
