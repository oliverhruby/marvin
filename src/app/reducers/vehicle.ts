import { Action, ActionReducer } from '@ngrx/store';

export const VEHICLE_UPDATE: string = 'VEHICLE_UPDATE';

export interface VehicleState {
  speed: number;
  direction: number;
  voltage: number;
  lights: {
    left: boolean;
    right: boolean;
  };
};

export const initialState: VehicleState = {
  speed: 0,
  direction: 0,
  voltage: 0,
  lights: {
    left: true,
    right: false
  }
};

export default function (state = initialState, action: Action): VehicleState {
  switch (action.type) {
    case VEHICLE_UPDATE:
      return {
        speed: Math.floor(Math.random() * 100),
        direction: Math.floor(Math.random() * 360),
        voltage: 5 + Math.random(),
        lights: {
          left: true,
          right: true
        }
      };
    default:
      return state;
  }
};
