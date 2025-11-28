import { ObjectOf } from 'tn-typescript'

const map: ObjectOf<string> = {
  '০': '0',
  '১': '1',
  '২': '2',
  '৩': '3',
  '৪': '4',
  '৫': '5',
  '৬': '6',
  '৭': '7',
  '৮': '8',
  '৯': '9',
}

export const numBn2En = (str: string) => {
  return str
    .split('')
    .map((i) => (map[i] === undefined ? i : map[i]))
    .join('')
}
