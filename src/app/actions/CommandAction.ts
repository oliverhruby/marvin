import { Action } from '@ngrx/store';

export const COMMAND_TAG = 'COMMAND_TAG';
export const COMMAND_SEND = 'COMMAND_SEND';

export class Tag implements Action {
    readonly type = COMMAND_TAG;
    constructor(public payload: any) { }
}

export class Send implements Action {
    readonly type = COMMAND_SEND;
    constructor(public payload: any) { }
}

export type CommandAction =
    Tag |
    Send;
