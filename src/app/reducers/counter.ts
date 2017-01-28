import { Action } from '@ngrx/store';

export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';
export const RESET: string = 'RESET';

export interface CounterState {
  value: number;
};

export const initialState: CounterState = {
  value: 0
};

export default function (state = initialState, action: Action): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    case RESET:
      return { value: 0 };
    default:
      return state;
  }
};
