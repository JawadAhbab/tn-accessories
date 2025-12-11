import { sleep } from '../misc/sleep'
const ctx = new window.AudioContext()

export const beep = async (
  type: OscillatorType = 'sine',
  frequency = 500,
  duration = 300,
  volume = 1
) => {
  const oscillator = ctx.createOscillator()
  const gainNode = ctx.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(ctx.destination)

  oscillator.frequency.value = frequency
  oscillator.type = type

  gainNode.gain.setValueAtTime(volume, ctx.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000)

  oscillator.start(ctx.currentTime)
  oscillator.stop(ctx.currentTime + duration / 1000)

  await sleep(duration)
}
