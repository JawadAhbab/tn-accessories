import { beepAudio } from './accessories/beepAudio'

export const beep = async (
  type: OscillatorType = 'sine',
  frequency = 500,
  duration = 300,
  volume = 1
) => {
  if (!beepAudio) return
  if (beepAudio.state === 'suspended') await beepAudio.resume()

  const osc = beepAudio.createOscillator()
  const gain = beepAudio.createGain()

  osc.type = type
  osc.frequency.value = frequency

  osc.connect(gain)
  gain.connect(beepAudio.destination)

  const now = beepAudio.currentTime
  const end = now + duration / 1000

  gain.gain.setValueAtTime(volume, now)
  gain.gain.exponentialRampToValueAtTime(0.001, end)

  osc.start(now)
  osc.stop(end)

  return new Promise((res) => setTimeout(res, duration))
}
