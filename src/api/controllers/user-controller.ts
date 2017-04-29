import { EntityController } from './entity-controller';
import { Log } from '../services/log';
import { Request, Response } from 'express';
import { User } from '../models/user.model';
import UserService from '../services/user.service';

let userService = new UserService();

export class UserController extends EntityController<User> {

  async get(request: Request, response: Response) {
    Log.info('API', `Retrieving user id ${request.params.id}`);
    try {
      let user = await userService.retrieve(request.params.id);
      response.json(user);
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
    Log.info('API', 'Retrieving users');
    try {
        let users = await userService.retrieveAll();
        response.json(users);
    } catch (error) {
        Log.error('API', error);
        response.sendStatus(500);
    }
  }

  async create(request: Request, response: Response) {
    Log.info('API', `Creating user ${JSON.stringify(request.body)}`);
    try {
      let user = await userService.create(request.body);
      response.json(user);
    } catch (error) {
      Log.error('API', error);
      if (error.indexOf('User exists') > -1) {
        response.sendStatus(400);
        return;
      }
      response.sendStatus(500);
    }
  }

  async delete(request: Request, response: Response) {
    Log.info('API', `Deleting user id ${request.params.id}`);
    try {
      await userService.delete(request.params.id);
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
    Log.info('API', `Updating user id ${request.body.id} to: ${JSON.stringify(request.body)}`);
    try {
      let user = await userService.update(request.body);
      response.json(user);
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
