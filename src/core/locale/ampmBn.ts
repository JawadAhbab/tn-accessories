import { time } from 'tn-time'

export const ampmBn = (dt: ReturnType<typeof time>) => {
  const hr = +dt.format('H')
  if (hr < 4) return 'রাত'
  if (hr < 6) return 'ভোর'
  if (hr < 12) return 'সকাল'
  if (hr < 15) return 'দুপুর'
  if (hr < 18) return 'বিকাল'
  if (hr < 20) return 'সন্ধ্যা'
  return 'রাত'
}
