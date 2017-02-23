import { Action, ActionReducer } from '@ngrx/store';

export const GAMEPAD_CONNECT: string = 'GAMEPAD_CONNECT';
export const GAMEPAD_DISCONNECT: string = 'GAMEPAD_DISCONNECT';
export const GAMEPAD_UPDATE_LS: string = 'GAMEPAD_UPDATE_LS';
export const GAMEPAD_UPDATE_RS: string = 'GAMEPAD_UPDATE_RS';

export interface GamepadState {
  connected: boolean;
  ls: any;
  rs: any;
  buttons: any;
};

export const initialState: GamepadState = {
  connected: null,
  ls: null,
  rs: null,
  buttons: null
};

export default function (state = initialState, action: Action): GamepadState {
  switch (action.type) {
    case GAMEPAD_CONNECT:
      state.connected = true;
      return state;
    case GAMEPAD_DISCONNECT:
      state.connected = false;
      return state;
    case GAMEPAD_UPDATE_LS:
      state.ls = action.payload;
      return state;
    case GAMEPAD_UPDATE_RS:
      state.rs = action.payload;
      return state;
    default:
      return state;
  }
};
