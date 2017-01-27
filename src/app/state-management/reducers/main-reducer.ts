import { ActionReducer, Action } from '@ngrx/store';
import { State, intitialState } from '../state/main-state';
import { INCREMENT, EVENT_FROM_EFFECT } from '../actions/main-action-creator';

export const mainStoreReducer: ActionReducer<State> =
  (state = intitialState, action: Action) => {

    console.log('STORE: action triggered - ' + action.type);

    switch (action.type) {

      case INCREMENT: {
        return {
          counter: state.counter + 1
        }
      }

      case EVENT_FROM_EFFECT: {
        return {
          counter: 4
        }
      }

      default: {
        return state;
      }
    }
  };
