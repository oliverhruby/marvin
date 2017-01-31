import { Action } from '@ngrx/store';

export const COMMAND_TAG = 'COMMAND_TAG';
export const COMMAND_SEND = 'COMMAND_SEND';

export interface CommandState {
  tag: string;
  command: string;
  entities?: Array<string>;
};

export const initialState: CommandState = {
  tag: '',
  command: ''
};

export default function (state = initialState, action: Action): CommandState {
  switch (action.type) {
    case COMMAND_TAG:
      return Object.assign({}, state, {
        tag: action.payload
      });
    case COMMAND_SEND:
      return Object.assign({}, state, {
        command: action.payload
      });
    default:
      return state;
  }
};
