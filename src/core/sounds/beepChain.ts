import { sleep } from '../misc/sleep'
import { beep } from './beep'
type BeepParams = Parameters<typeof beep>
type Action =
  | { type: 'beep'; await?: boolean; params: BeepParams }
  | { type: 'wait'; duration: number }

export const beepChain = () => new BeepChain()

class BeepChain {
  private actions: Action[] = []
  constructor() {
    setTimeout(() => this.play())
  }

  public beep(...params: BeepParams) {
    this.actions.push({ type: 'beep', params })
    return this
  }
  public beepAwait(...params: BeepParams) {
    this.actions.push({ type: 'beep', await: true, params })
    return this
  }
  public wait(duration = 300) {
    this.actions.push({ type: 'wait', duration })
    return this
  }
  private async play() {
    for (const action of this.actions) {
      if (action.type === 'wait') await sleep(action.duration)
      else if (action.await) await beep(...action.params)
      else beep(...action.params)
    }
  }
}
