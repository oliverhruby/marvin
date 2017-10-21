import { Action } from '@ngrx/store';

export const GAMEPAD_BUTTON_DOWN = 'GAMEPAD_BUTTON_DOWN';
export const GAMEPAD_BUTTON_UP = 'GAMEPAD_BUTTON_UP';
export const GAMEPAD_CONNECT = 'GAMEPAD_CONNECT';
export const GAMEPAD_DISCONNECT = 'GAMEPAD_DISCONNECT';
export const GAMEPAD_UPDATE_LS = 'GAMEPAD_UPDATE_LS';
export const GAMEPAD_UPDATE_RS = 'GAMEPAD_UPDATE_RS';

export class ButtonDown implements Action {
    readonly type = GAMEPAD_BUTTON_DOWN;
    constructor(public payload: any) { }
}

export class ButtonUp implements Action {
    readonly type = GAMEPAD_BUTTON_UP;
    constructor(public payload: any) { }
}

export class Connect implements Action {
    readonly type = GAMEPAD_CONNECT;
    constructor(public payload: any) { }
}

export class Disconnect implements Action {
    readonly type = GAMEPAD_DISCONNECT;
    constructor(public payload: any) { }
}

export class UpdateLS implements Action {
    readonly type = GAMEPAD_UPDATE_LS;
    constructor(public payload: any) { }
}

export class UpdateRS implements Action {
    readonly type = GAMEPAD_UPDATE_RS;
    constructor(public payload: any) { }
}

export type GamepadAction =
    ButtonDown |
    ButtonUp |
    Connect |
    Disconnect |
    UpdateRS |
    UpdateLS;
