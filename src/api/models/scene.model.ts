/**
 * Scene information
 */
export interface IScene {
  id: number;
  name: string;
  definition: string;
}

/**
 * Scene model interface
 */
export interface ISceneModel extends IScene {

}

/**
 * Scene model implementation
 */
export class Scene implements ISceneModel {
  id: number;
  name: string;
  definition: string;

  create() { }
  delete() { }
  retrieve() { }
  retrieveAll() { }
  update() { }
}
