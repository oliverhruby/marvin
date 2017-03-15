import { Action, ActionReducer } from '@ngrx/store';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export interface UserState {
  authenticated: boolean;
  profile: any;
};

export const initialState: UserState = {
  authenticated: false,
  profile: null
};

export default function (state = initialState, action: Action): UserState {
  switch (action.type) {
    case USER_LOGIN:
      return Object.assign({}, state, {
        authenticated: true,
        profile: action.payload
      });
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
