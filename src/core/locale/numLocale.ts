export const numLocale = (num: number | string) => {
  return num.toLocaleString('en-In', { maximumFractionDigits: 2 })
}
