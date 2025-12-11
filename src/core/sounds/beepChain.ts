import { beepAudio } from './accessories/beepAudio'
import { beep } from './beep'

export const beepChain = () => new BeepChain()

class BeepChain {
  private audioTime = 0

  beep(...params: Parameters<typeof beep>) {
    beep(...params)
    return this
  }

  wait(duration = 300) {
    const d = duration / 1000
    if (beepAudio) {
      if (this.audioTime < beepAudio.currentTime) this.audioTime = beepAudio.currentTime
      this.audioTime += d
    }
    return this
  }
}
