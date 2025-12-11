import { beep } from './beep';
export declare const beepChain: () => BeepChain;
declare class BeepChain {
    private audioTime;
    beep(...params: Parameters<typeof beep>): this;
    wait(duration?: number): this;
}
export {};
