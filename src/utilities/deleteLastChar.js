export const deleteLastChar = (str) => {
  return str.length > 1 ? str.slice(0, -1) : '0'
}
