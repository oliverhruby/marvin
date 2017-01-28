import { Action, ActionReducer } from '@ngrx/store';

export const LASER_UPDATE: string = 'LASER_UPDATE';

export interface LaserState {
  angle: number;
  distance: number;
};

export const initialState: LaserState = {
  angle: 0,
  distance: 10000000
};

export default function (state = initialState, action: Action): LaserState {
  switch (action.type) {
    case LASER_UPDATE:
      return { angle: (state.angle + 1) % 100, distance: Math.floor(Math.random()*1000) };
    default:
      return state;
  }
};
