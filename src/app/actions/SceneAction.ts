import { Action } from '@ngrx/store';

export const SCENE_UPDATE = 'SCENE_UPDATE';

export class Update implements Action {
    readonly type = SCENE_UPDATE;
    constructor(public payload: any) { }
}

export type SceneAction =
    Update;
