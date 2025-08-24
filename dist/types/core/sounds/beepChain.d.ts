import { beep } from './beep';
type BeepParams = Parameters<typeof beep>;
export declare function beepChain(): {
    beep(type?: OscillatorType | undefined, frequency?: number | undefined, duration?: number | undefined, volume?: number | undefined): /*elided*/ any;
    wait(duration?: number): void;
    play(): Promise<void>;
};
export {};
