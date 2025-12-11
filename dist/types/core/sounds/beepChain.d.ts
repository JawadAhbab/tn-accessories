import { beep } from './beep';
export declare const beepChain: () => BeepChain;
declare class BeepChain {
    private actions;
    beep(...params: Parameters<typeof beep>): this;
    beepAwait(...params: Parameters<typeof beep>): this;
    wait(duration?: number): this;
    play(): Promise<void>;
}
export {};
