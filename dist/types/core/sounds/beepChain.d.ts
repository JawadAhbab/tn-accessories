import { beep } from './beep';
type BeepParams = Parameters<typeof beep>;
export declare const beepChain: () => BeepChain;
declare class BeepChain {
    private actions;
    constructor();
    beep(...params: BeepParams): this;
    beepAwait(...params: BeepParams): this;
    wait(duration?: number): this;
    private play;
}
export {};
