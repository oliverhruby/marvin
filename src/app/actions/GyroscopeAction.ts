import { Action } from '@ngrx/store';

export const GYROSCOPE_UPDATE_ORIENTATION = 'GYROSCOPE_UPDATE_ORIENTATION';
export const GYROSCOPE_UPDATE_MOTION = 'GYROSCOPE_UPDATE_MOTION';


export class Orientation implements Action {
    readonly type = GYROSCOPE_UPDATE_ORIENTATION;
    constructor(public payload: any) { }
}
export class Motion implements Action {
    readonly type = GYROSCOPE_UPDATE_MOTION;
    constructor(public payload: any) { }
}

export type GyroscopeAction =
    Orientation |
    Motion;
