import { Action, ActionReducer } from '@ngrx/store';

export const SCENE_LOAD: string = 'SCENE_LOAD';

export interface SceneState {
  loaded: boolean;
  name: string;
};

export const initialState: SceneState = {
  loaded: false,
  name: ''
};

export default function (state = initialState, action: Action): SceneState {
  switch (action.type) {
    case SCENE_LOAD:
      return Object.assign({}, state, {
        loaded: true,
        name: 'test'
      });
    default:
      return state;
  }
};
