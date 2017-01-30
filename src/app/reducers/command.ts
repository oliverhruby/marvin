import { Action } from '@ngrx/store';

export const COMMAND_TAG = 'COMMAND_TAG';

export interface CommandState {
  tag: string;
  command: string;
  entities?: Array<string>;
};

export const initialState: CommandState = {
  tag:'',
  command: ''
};

export default function (state = initialState, action: Action): CommandState {
  switch (action.type) {
    case COMMAND_TAG:
      return { tag: action.payload, command: state.command };
    default:
      return state;
  }
};
