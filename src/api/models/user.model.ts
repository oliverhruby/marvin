import { IUserModel } from './user.model';
/**
 * User information
 */
export interface IUser {
  id: number;
  name: string;
}

/**
 * User model interface
 */
export interface IUserModel extends IUser {

}

/**
 * User model implementation
 */
export class UserModel implements IUserModel {
  id: number;
  name: string;

  create() { }
  delete() { }
  retrieve() { }
  retrieveAll() { }
  update() { }
}

export let User = new UserModel();

