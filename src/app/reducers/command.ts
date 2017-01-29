import { Action } from '@ngrx/store';

export const COMMAND_SEND = 'COMMAND_SEND';

export interface CommandState {
  command: string;
  entities?: Array<string>;
};

export const initialState: CommandState = {
  command: ''
};

export default function (state = initialState, action: Action): CommandState {
  switch (action.type) {
    case COMMAND_SEND:
      return { command: action.payload };
    default:
      return state;
  }
};
