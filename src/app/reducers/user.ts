import * as user from '../actions/UserAction';

export interface UserState {
  authenticated: boolean;
  profile: any;
};

export const initialState: UserState = {
  authenticated: false,
  profile: null
};

export function reducer (state = initialState, action: user.UserAction): UserState {
  switch (action.type) {
    case user.USER_LOGIN:
      return Object.assign({}, state, {
        authenticated: true,
        profile: action.payload
      });
    case user.USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
