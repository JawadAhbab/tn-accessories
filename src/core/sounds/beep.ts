import { beepAudio } from './accessories/beepAudio'
let audioTime = 0

export const beep = (
  type: OscillatorType = 'sine',
  frequency = 500,
  duration = 300,
  volume = 1
) => {
  if (!beepAudio) return
  if (beepAudio.state === 'suspended') beepAudio.resume()
  const now = beepAudio.currentTime
  if (audioTime < now) audioTime = now

  const start = audioTime
  const end = start + duration / 1000

  const osc = beepAudio.createOscillator()
  const gain = beepAudio.createGain()

  osc.connect(gain)
  gain.connect(beepAudio.destination)

  osc.type = type
  osc.frequency.setValueAtTime(frequency, start)

  gain.gain.setValueAtTime(volume, start)
  gain.gain.exponentialRampToValueAtTime(0.01, end)

  osc.start(start)
  osc.stop(end)

  audioTime = end
}
