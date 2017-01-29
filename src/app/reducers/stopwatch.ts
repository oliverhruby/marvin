import { Action, ActionReducer } from '@ngrx/store';

export const STOPWATCH_START: string = 'STOPWATCH_START';
export const STOPWATCH_PAUSE: string = 'STOPWATCH_PAUSE';
export const STOPWATCH_RESET: string = 'STOPWATCH_RESET';

export interface StopwatchState {
  date: string,
  running: boolean,
  elapsed: number
};

export const initialState: StopwatchState = {
  date: new Date().toDateString(),
  running: false,
  elapsed: 0
};

export default function (state = initialState, action: Action): StopwatchState {
  switch (action.type) {
    case STOPWATCH_START:
      state.running = true;
      return state;
    case STOPWATCH_PAUSE:
      state.running = false;
      return state;
    case STOPWATCH_RESET:
      state.elapsed = 0;
      return state;
    default:
      return state;
  }
};
