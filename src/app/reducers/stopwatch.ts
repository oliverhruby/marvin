import * as stopwatch from '../actions/StopwatchAction';

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

export function reducer (state = initialState, action: stopwatch.StopwatchAction): StopwatchState {
  switch (action.type) {
    case stopwatch.STOPWATCH_START:
      return Object.assign({}, state, {
        running: true
      });
    case stopwatch.STOPWATCH_STOP:
      return Object.assign({}, state, {
        running: false
      });
    case stopwatch.STOPWATCH_RESET:
      return initialState;
    case stopwatch.STOPWATCH_TIME:
      return Object.assign({}, state, {
        time: new Date().getTime()
      });
    default:
      return state;
  }
};

export const getTime = (state: StopwatchState) => state.time;
export const getRunning = (state: StopwatchState) => state.running;
