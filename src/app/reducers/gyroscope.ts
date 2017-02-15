import { Action, ActionReducer } from '@ngrx/store';

export const GYROSCOPE_UPDATE_ORIENTATION: string = 'GYROSCOPE_UPDATE_ORIENTATION';
export const GYROSCOPE_UPDATE_MOTION: string = 'GYROSCOPE_UPDATE_MOTION';

export interface GyroscopeState {
  deviceOrientation: {
    alpha: number;
    beta: number;
    gamma: number;
  },
  accelerationIncludingGravity: {
    x: number;
    y: number;
    z: number;
  }
};

export const initialState: GyroscopeState = {
  deviceOrientation: {
    alpha: 0,
    beta: 0,
    gamma: 0
  },
  accelerationIncludingGravity: {
    x: 0,
    y: 0,
    z: 0
  }
};

export default function (state = initialState, action: Action): GyroscopeState {
  switch (action.type) {
    case GYROSCOPE_UPDATE_ORIENTATION:
      state.deviceOrientation = {
          alpha: action.payload.alpha,
          beta: action.payload.beta,
          gamma: action.payload.gamma
      };
      return state;
    case GYROSCOPE_UPDATE_MOTION:
      state.accelerationIncludingGravity = {
          x: action.payload.x,
          y: action.payload.y,
          z: action.payload.z
      };
      return state;
    default:
      return state;
  }
};
