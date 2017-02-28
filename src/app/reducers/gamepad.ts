import { Action, ActionReducer } from '@ngrx/store';

export const GAMEPAD_BUTTON_DOWN: string = 'GAMEPAD_BUTTON_DOWN';
export const GAMEPAD_BUTTON_UP: string = 'GAMEPAD_BUTTON_UP';
export const GAMEPAD_CONNECT: string = 'GAMEPAD_CONNECT';
export const GAMEPAD_DISCONNECT: string = 'GAMEPAD_DISCONNECT';
export const GAMEPAD_UPDATE_LS: string = 'GAMEPAD_UPDATE_LS';
export const GAMEPAD_UPDATE_RS: string = 'GAMEPAD_UPDATE_RS';

export interface GamepadState {
  index: number;
  timestamp: number;
  connected: boolean;
  ls: any;
  rs: any;
  buttons: any;
};

export const initialState: GamepadState = {
  index: null,
  timestamp: null,
  connected: null,
  ls: null,
  rs: null,
  buttons: null
};

export default function (state = initialState, action: Action): GamepadState {
  switch (action.type) {
    case GAMEPAD_BUTTON_DOWN:
      state.buttons = action.payload;
      return state;
    case GAMEPAD_BUTTON_UP:
      state.buttons = action.payload;
      return state;
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
