import { ObjectOf } from 'tn-typescript'
const map: ObjectOf<string> = {
  jan: 'জানুয়ারি',
  january: 'জানুয়ারি',
  feb: 'ফেব্রুয়ারি',
  february: 'ফেব্রুয়ারি',
  mar: 'মার্চ',
  march: 'মার্চ',
  apr: 'এপ্রিল',
  april: 'এপ্রিল',
  may: 'মে',
  jun: 'জুন',
  june: 'জুন',
  jul: 'জুলাই',
  july: 'জুলাই',
  aug: 'আগস্ট',
  august: 'আগস্ট',
  sep: 'সেপ্টেম্বর',
  september: 'সেপ্টেম্বর',
  oct: 'অক্টোবর',
  october: 'অক্টোবর',
  nov: 'নভেম্বর',
  november: 'নভেম্বর',
  dec: 'ডিসেম্বর',
  december: 'ডিসেম্বর',
}

export const monthBn = (month: string) => map[month.toLowerCase()]
