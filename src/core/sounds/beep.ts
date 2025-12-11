import { sleep } from '../misc/sleep'
const audioContext = new window.AudioContext()

export const beep = async (
  type: OscillatorType = 'sine',
  frequency = 500,
  duration = 300,
  volume = 1
) => {
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = frequency
  oscillator.type = type

  gainNode.gain.setValueAtTime(volume, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + duration / 1000)

  await sleep(duration)
}
