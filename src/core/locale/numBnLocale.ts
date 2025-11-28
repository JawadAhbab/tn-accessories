import { numBn } from './numBn'
import { numLocale } from './numLocale'

export const numBnLocale = (num: number | string) => {
  return numBn(numLocale(num))
}
