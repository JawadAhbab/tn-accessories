import { sleep } from '../misc/sleep'
import { beep } from './beep'
type BeepParams = Parameters<typeof beep>
type Action = { type: 'beep'; params: BeepParams } | { type: 'wait'; duration: number }

class BeepChain {
  private actions: Action[] = []
  public beep(...params: BeepParams) {
    this.actions.push({ type: 'beep', params })
    return this
  }
  public wait(duration = 1000) {
    this.actions.push({ type: 'wait', duration })
    return this
  }
  public async play() {
    for (const action of this.actions) {
      if (action.type === 'wait') await sleep(action.duration)
      else await beep(...action.params)
    }
  }
}

export function beepChain() {
  return new BeepChain()
}
