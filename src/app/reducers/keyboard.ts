import * as keyboard from '../actions/KeyboardAction';

export interface KeyboardState {
  pressed: boolean;
  keys: any;
};

export const initialState: KeyboardState = {
  pressed: false,
  keys: []
};

export function reducer (state = initialState, action: keyboard.KeyboardAction): KeyboardState {
  switch (action.type) {
    case keyboard.KEYBOARD_DOWN:
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
    case keyboard.KEYBOARD_UP:
      return Object.assign({}, state, {
        pressed: true,
        keys: state.keys.filter(element => element !== action.payload.code),
        ctrlKey: action.payload.ctrlKey
      });
    default:
      return state;
  }
};
