import * as scene from '../actions/SceneAction';

export interface SceneState {
  loaded: boolean;
  name: string;
};

export const initialState: SceneState = {
  loaded: false,
  name: ''
};

export function reducer (state = initialState, action: scene.SceneAction): SceneState {
  switch (action.type) {
    case scene.SCENE_UPDATE:
      return Object.assign({}, state, {
        loaded: true,
        name: 'test',
        scene: action.payload
      });
    default:
      return state;
  }
};
