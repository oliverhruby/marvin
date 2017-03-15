import { Action, ActionReducer } from '@ngrx/store';

export const SCENE_UPDATE = 'SCENE_UPDATE';

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
    case SCENE_UPDATE:
      return Object.assign({}, state, {
        loaded: true,
        name: 'test',
        scene: action.payload
      });
    default:
      return state;
  }
};
