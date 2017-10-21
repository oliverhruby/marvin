import * as laser from '../actions/LaserAction';

export interface LaserState {
  angle: number;
  distance: number;
};

export const initialState: LaserState = {
  angle: 0,
  distance: 10000000
};

export function reducer (state = initialState, action: laser.LaserAction): LaserState {
  switch (action.type) {
    case laser.LASER_UPDATE:
      return { angle: (state.angle + 1) % 100, distance: Math.floor(Math.random() * 1000) };
    default:
      return state;
  }
};
