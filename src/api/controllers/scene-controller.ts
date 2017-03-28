import { EntityController } from './entity-controller';
import { Log } from '../services/log';
import { Request, Response } from 'express';
import { Scene } from '../models/scene.model';
import SceneService from '../services/scene.service';

let sceneService = new SceneService();

export class SceneController extends EntityController<Scene> {

  async get(request: Request, response: Response) {
    Log.info('API', `API: Retrieving scene id ${request.params.id}`);
    try {
      let scene = await sceneService.retrieve(request.params.id);
      response.json(scene);
    } catch (error) {
      Log.error('API', error);
      if (error.indexOf('Invalid id') > -1) {
        response.sendStatus(404);
        return;
      }
      response.sendStatus(500);
    }
  }

  async getAll(request: Request, response: Response) {
    Log.info('API', 'Retrieving scenes');
    try {
        let scenes = await sceneService.retrieveAll();
        response.json(scenes);
    } catch (error) {
        Log.error('API', error);
        response.sendStatus(500);
    }
  }

  async create(request: Request, response: Response) {
    Log.info('API', `Creating scene ${JSON.stringify(request.body)}`);
    try {
      let scene = await sceneService.create(request.body);
      response.json(scene);
    } catch (error) {
      Log.error('API', error);
      if (error.indexOf('Scene exists') > -1) {
        response.sendStatus(400);
        return;
      }
      response.sendStatus(500);
    }
  }

  async delete(request: Request, response: Response) {
   Log.info('API', `Deleting scene id ${request.params.id}`);
    try {
      await sceneService.delete(request.params.id);
      response.end();
    } catch (error) {
      Log.error('API', error);
      if (error.indexOf('Invalid id') > -1) {
        response.sendStatus(404);
        return;
      }
      response.sendStatus(500);
    }
  }

  async update(request: Request, response: Response) {
    Log.info('API', `Updating scene id ${request.body.sceneId} to: ${JSON.stringify(request.body)}`);
    try {
      let scene = await sceneService.update(request.body);
      response.json(scene);
    } catch (error) {
      Log.error('API', error);
      if (error.indexOf('Invalid id') > -1) {
        response.sendStatus(404);
        return;
      }
      response.sendStatus(500);
    }
  }
}
