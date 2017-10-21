import { Action } from '@ngrx/store';

export const BATTERY_UPDATE = 'BATTERY_UPDATE';

export class Update implements Action {
    readonly type = BATTERY_UPDATE;
    constructor(public payload: any) { }
}

export type BatteryAction =
    Update;
