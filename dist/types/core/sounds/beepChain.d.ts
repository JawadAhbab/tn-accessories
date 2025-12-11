import { beep } from './beep';
export declare const beepChain: () => BeepChain;
declare class BeepChain {
    private actions;
    constructor();
    beep(...params: Parameters<typeof beep>): this;
    beepAwait(...params: Parameters<typeof beep>): this;
    wait(duration: number): this;
    private play;
}
export {};
