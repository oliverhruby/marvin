import { Action, ActionReducer } from '@ngrx/store';

export const BATTERY_UPDATE: string = 'BATTERY_UPDATE';

export interface BatteryState {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
};

export const initialState: BatteryState = {
  charging: true,
  chargingTime: null,
  dischargingTime: null,
  level: 1
};

export default function (state = initialState, action: Action): BatteryState {
  switch (action.type) {
    case BATTERY_UPDATE:
      return {
        charging: action.payload.charging,
        chargingTime: action.payload.chargingTime,
        dischargingTime: action.payload.dischargingTime,
        level: action.payload.level
      };
    default:
      return state;
  }
};
