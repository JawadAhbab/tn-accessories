import { sleep } from '../misc/sleep'
import { beep } from './beep'
type BeepParams = Parameters<typeof beep>
type Action = { type: 'beep'; params: BeepParams } | { type: 'wait'; duration: number }

export function beepChain() {
  const actions: Action[] = []
  return {
    beep(...params: BeepParams) {
      actions.push({ type: 'beep', params })
      return this
    },
    wait(duration = 1000) {
      actions.push({ type: 'wait', duration })
    },
    async play() {
      for (const action of actions) {
        if (action.type === 'wait') await sleep(action.duration)
        else await beep(...action.params)
      }
    },
  }
}
