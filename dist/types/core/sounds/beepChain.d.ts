import { beep } from './beep';
type BeepParams = Parameters<typeof beep>;
declare class BeepChain {
    private actions;
    beep(...params: BeepParams): this;
    wait(duration?: number): this;
    play(): Promise<void>;
}
export declare function beepChain(): BeepChain;
export {};
