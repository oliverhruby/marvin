import { Action, ActionReducer } from '@ngrx/store';

export const BATTERY_UPDATE: string = 'BATTERY_UPDATE';

export interface BatteryState {
  isCharging: boolean;
  level: number;
};

export const initialState: BatteryState = {
  isCharging: true,
  level: 100
};

export default function (state = initialState, action: Action): BatteryState {
  switch (action.type) {
    case BATTERY_UPDATE:
      return state; // TODO: add meaningful logic
    default:
      return initialState;
  }
};
