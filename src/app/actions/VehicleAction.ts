import { Action } from '@ngrx/store';

export const VEHICLE_UPDATE = 'VEHICLE_UPDATE';

export class Update implements Action {
    readonly type = VEHICLE_UPDATE;
    constructor(public payload: any) { }
}

export type VehicleAction =
    Update;
