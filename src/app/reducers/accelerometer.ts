import { Action, ActionReducer } from '@ngrx/store';

export const ACCELEROMETER_UPDATE: string = 'ACCELEROMETER_UPDATE';

export interface AccelerometerState {
  x: number;
  y: number;
  z: number;
};

export const initialState: AccelerometerState = {
  x: 0,
  y: 0,
  z: 0
};

export default function (state = initialState, action: Action): AccelerometerState {
  switch (action.type) {
    case ACCELEROMETER_UPDATE:
      return state; // TODO: add meaningful logic
    default:
      return initialState;
  }
};
