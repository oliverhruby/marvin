import { Action, ActionReducer } from '@ngrx/store';

export const KEYBOARD_DOWN: string = 'KEYBOARD_DOWN';
export const KEYBOARD_UP: string = 'KEYBOARD_UP';

export interface KeyboardState {
  pressed: boolean;
  keys: any
};

export const initialState: KeyboardState = {
  pressed: false,
  keys: []
};

export default function (state = initialState, action: Action): KeyboardState {
  switch (action.type) {
    case KEYBOARD_DOWN:
      state = Object.assign({}, state, {
        pressed: true,
        ctrlKey: action.payload.ctrlKey
      });
      if(!state.keys.includes(action.payload.code)) {
        state = Object.assign({}, state, {
          keys: [...state.keys, action.payload.code],
        });
      }
      return state;
    case KEYBOARD_UP:
      return Object.assign({}, state, {
        pressed: true,
        keys: state.keys.filter(element => element !== action.payload.code),
        ctrlKey: action.payload.ctrlKey
      });
    default:
      return state;
  }
};
