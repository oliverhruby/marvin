import { Action, ActionReducer } from '@ngrx/store';

export const KEYBOARD_UPDATE: string = 'KEYBOARD_UPDATE';

export interface KeyboardState {
  pressed: boolean;
};

export const initialState: KeyboardState = {
  pressed: false
};

export default function (state = initialState, action: Action): KeyboardState {
  switch (action.type) {
    case KEYBOARD_UPDATE:
      return Object.assign({}, state, {
        pressed: action.payload
      });
    default:
      return state;
  }
};
