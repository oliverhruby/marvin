import { Action, ActionReducer } from '@ngrx/store';

export const VEHICLE_UPDATE = 'VEHICLE_UPDATE';

export interface VehicleState {
  direction: number;
  lights: {
    left: boolean;
    right: boolean;
  };
  position: [number, number, number],
  speed: number;
  voltage: number;
};

export const initialState: VehicleState = {
  direction: 0,
  lights: {
    left: true,
    right: false
  },
  position: [0, 0, 0],
  speed: 0,
  voltage: 0
};

export default function (state = initialState, action: Action): VehicleState {
  switch (action.type) {
    case VEHICLE_UPDATE:
      return Object.assign({}, state, {
        position: action.payload
      });
    default:
      return state;
  }
};
