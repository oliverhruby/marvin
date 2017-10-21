import { Action } from '@ngrx/store';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export class Login implements Action {
    readonly type = USER_LOGIN;
    constructor(public payload: any) { }
}

export class Logout implements Action {
    readonly type = USER_LOGOUT;
    constructor(public payload: any) { }
}

export type UserAction =
    Login |
    Logout;
