import { Action } from '@ngrx/store';

export const LASER_UPDATE = 'LASER_UPDATE';

export class Update implements Action {
    readonly type = LASER_UPDATE;
    constructor(public payload: any) { }
}

export type LaserAction =
    Update;
