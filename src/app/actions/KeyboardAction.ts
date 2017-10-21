import { Action } from '@ngrx/store';

export const KEYBOARD_DOWN = 'KEYBOARD_DOWN';
export const KEYBOARD_UP = 'KEYBOARD_UP';

export class Down implements Action {
    readonly type = KEYBOARD_DOWN;
    constructor(public payload: any) { }
}

export class Up implements Action {
    readonly type = KEYBOARD_UP;
    constructor(public payload: any) { }
}

export type KeyboardAction =
    Down |
    Up;
