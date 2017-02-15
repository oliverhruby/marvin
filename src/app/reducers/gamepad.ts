import { Action, ActionReducer } from '@ngrx/store';

export const GAMEPAD_CONNECT: string = 'GAMEPAD_CONNECT';
export const GAMEPAD_UPDATE: string = 'GAMEPAD_UPDATE';

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
    case GAMEPAD_CONNECT:
      state.connected = true;
      return state;
    case GAMEPAD_UPDATE:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
