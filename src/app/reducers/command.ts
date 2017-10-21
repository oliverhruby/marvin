import * as command from '../actions/CommandAction';

export interface CommandState {
  tag: string;
  command: string;
  entities?: Array<string>;
};

export const initialState: CommandState = {
  tag: '',
  command: ''
};

export function reducer (state = initialState, action: command.CommandAction): CommandState {
  switch (action.type) {
    case command.COMMAND_TAG:
      return Object.assign({}, state, {
        tag: action.payload
      });
    case command.COMMAND_SEND:
      return Object.assign({}, state, {
        command: action.payload
      });
    default:
      return state;
  }
};
