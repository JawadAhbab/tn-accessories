import { beep } from './beep'
type BeepParams = Parameters<typeof beep>
type Action =
  | { type: 'beep'; await?: boolean; params: BeepParams }
  | { type: 'wait'; duration: number }

export const beepChain = () => new BeepChain()

class BeepChain {
  private actions: Action[] = []

  beep(...params: Parameters<typeof beep>) {
    this.actions.push({ type: 'beep', params })
    return this
  }

  beepAwait(...params: Parameters<typeof beep>) {
    this.actions.push({ type: 'beep', await: true, params })
    return this
  }

  wait(duration = 300) {
    this.actions.push({ type: 'wait', duration })
    return this
  }

  async play() {
    for (const a of this.actions) {
      if (a.type === 'wait') {
        await new Promise((r) => setTimeout(r, a.duration))
      } else if (a.await) {
        await beep(...a.params)
      } else {
        beep(...a.params)
      }
    }
  }
}
