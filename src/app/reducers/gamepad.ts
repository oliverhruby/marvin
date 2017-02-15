import { Action, ActionReducer } from '@ngrx/store';

export const GAMEPAD_STATUS: string = 'GAMEPAD_STATUS';

export interface GamepadState {
  connected: boolean;
  buttons: any;
};

export const initialState: GamepadState = {
  connected: null,
  buttons: null
};

export default function (state = initialState, action: Action): GamepadState {
  switch (action.type) {
    case GAMEPAD_STATUS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
