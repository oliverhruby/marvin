import * as gyroscope from '../actions/GyroscopeAction';

export interface GyroscopeState {
  deviceOrientation: {
    alpha: number;
    beta: number;
    gamma: number;
  };
  accelerationIncludingGravity: {
    x: number;
    y: number;
    z: number;
  };
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

export function reducer (state = initialState, action: gyroscope.GyroscopeAction): GyroscopeState {
  switch (action.type) {
    case gyroscope.GYROSCOPE_UPDATE_ORIENTATION:
      state.deviceOrientation = {
          alpha: action.payload.alpha,
          beta: action.payload.beta,
          gamma: action.payload.gamma
      };
      return state;
    case gyroscope.GYROSCOPE_UPDATE_MOTION:
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
