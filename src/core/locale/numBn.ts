import { ObjectOf } from 'tn-typescript'
const map: ObjectOf<string> = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯',
}

export const numBn = (str: string | number) => {
  return str
    .toString()
    .split('')
    .map((i) => (map[i] === undefined ? i : map[i]))
    .join('')
}
