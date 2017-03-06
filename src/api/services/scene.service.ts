import { Scene } from '../models';
import { Repository } from './repository';

export default class SceneService extends Repository<Scene> {

  private _scenes: Scene[] = [
    {id: 1, name: 'Marvin', definition: 'Example scene that visualizes a robotic rover vehicle' },
    {id: 2, name: 'Robot Arm', definition: 'Visualisation of an example industrial manipulator' }
  ];

  retrieveAll(): Promise<Scene[]> {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM scenes', function(err, rows) {
        resolve(rows);
      });
    });
  }

  retrieve(id: number): Promise<Scene> {
    return new Promise((resolve, reject) => {
      let scene = this.getScene(id);
      if (scene === null) {
        reject(`Invalid id: ${id}`);
      }
      resolve(scene);
    });
  }

  create(scene: Scene): Promise<Scene> {
    return new Promise((resolve, reject) => {
      if (this.getScene(scene.id) !== null) {
        reject(`Scene exists with id: ${scene.id}`);
      }
      this._scenes.push(scene);
      resolve(scene);
    });
  }

  delete(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.getScene(id) === null) {
        reject(`Invalid id: ${id}`);
      }
      this._scenes.splice(id - 1, 1);
      resolve();
    });
  }

  update(scene: Scene): Promise<Scene> {
    return new Promise((resolve, reject) => {
      let existingScene = this.getScene(scene.id);
      if (existingScene === null) {
        reject(`Invalid id: ${scene.id}`);
      }
      let index = this._scenes.indexOf(existingScene);
      this._scenes[index] = scene;
      resolve(scene);
    });
  }

  private getScene(id: number): Scene | null {
    let scenes: Scene[] = this._scenes
      .filter(u => u.id === id);
    if (scenes.length > 0) {
      return scenes[0];
    }
    return null;
  }

}
