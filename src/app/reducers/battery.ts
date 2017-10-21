import * as battery from '../actions/BatteryAction';

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

export function reducer (state = initialState, action: battery.BatteryAction): BatteryState {
  switch (action.type) {
    case battery.BATTERY_UPDATE:
      return Object.assign({}, state, {
        charging: action.payload.charging,
        chargingTime: action.payload.chargingTime,
        dischargingTime: action.payload.dischargingTime,
        level: action.payload.level
      });
    default:
      return state;
  }
};
