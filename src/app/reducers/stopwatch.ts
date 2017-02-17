import { Action, ActionReducer } from '@ngrx/store';

export const STOPWATCH_START: string = 'STOPWATCH_START';
export const STOPWATCH_STOP: string = 'STOPWATCH_STOP';
export const STOPWATCH_RESET: string = 'STOPWATCH_RESET';
export const STOPWATCH_TIME: string = 'STOPWATCH_TIME';

export interface StopwatchState {
  time: number;
  running: boolean;
  elapsed: number;
};

export const initialState: StopwatchState = {
  time: 0,
  running: false,
  elapsed: 0
};

export default function (state = initialState, action: Action): StopwatchState {
  switch (action.type) {
    case STOPWATCH_START:
      return Object.assign({}, state, {
        running: true
      });
    case STOPWATCH_STOP:
      return Object.assign({}, state, {
        running: false
      });
    case STOPWATCH_RESET:
      return initialState;
    case STOPWATCH_TIME:
      return Object.assign({}, state, {
        time: new Date().getTime()
      });
    default:
      return state;
  }
};

export const getTime = (state: StopwatchState) => state.time;
export const getRunning = (state: StopwatchState) => state.running;