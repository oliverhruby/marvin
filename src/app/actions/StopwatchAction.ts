import { Action } from '@ngrx/store';

export const STOPWATCH_START = 'STOPWATCH_START';
export const STOPWATCH_STOP = 'STOPWATCH_STOP';
export const STOPWATCH_RESET = 'STOPWATCH_RESET';
export const STOPWATCH_TIME = 'STOPWATCH_TIME';

export class Start implements Action {
    readonly type = STOPWATCH_START;
    constructor(public payload: any) { }
}

export class Stop implements Action {
    readonly type = STOPWATCH_STOP;
    constructor(public payload: any) { }
}

export class Reset implements Action {
    readonly type = STOPWATCH_RESET;
    constructor(public payload: any) { }
}
export class Time implements Action {
    readonly type = STOPWATCH_TIME;
    constructor(public payload: any) { }
}

export type StopwatchAction =
    Start |
    Stop |
    Reset |
    Time;
