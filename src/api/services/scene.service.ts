import { Scene } from '../models';
import { Repository } from './repository';

export default class SceneService extends Repository<Scene> {

  retrieveAll(): Promise<Scene[]> {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM scenes', function(err: any, rows: any) {
        resolve(rows);
      });
    });
  }

  retrieve(id: number): Promise<Scene> {
    return new Promise((resolve, reject) => {
      this.db.each('SELECT * FROM scenes WHERE id = ?', [id], function(err: any, rows: any) {
        resolve(rows);
      });
    });
  }

  create(scene: Scene): Promise<Scene> {
    return new Promise((resolve, reject) => {
      this.db.each('INSERT INTO scenes (id, name) VALUES (?, ?)', [scene.id, scene.name], function(err: any, rows: any) {
        resolve(rows);
      });
    });
  }

  delete(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.each('DELETE FROM scenes WHERE id = ?', [id], function(err: any, rows: any) {
        resolve(rows);
      });
    });
  }

  update(scene: Scene): Promise<Scene> {
    return new Promise((resolve, reject) => {
      // let existingScene = this.getScene(scene.id);
      // if (existingScene === null) {
      //   reject(`Invalid id: ${scene.id}`);
      // }
      // let index = this._scenes.indexOf(existingScene);
      // this._scenes[index] = scene;
      resolve(scene);
    });
  }

}
