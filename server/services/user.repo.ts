import { User } from '../models/plugin';

export default class UserRepository {

  private _users = [
    new User(1, 'User 1'),
    new User(2, 'User 2'),
    new User(3, 'User 3')
  ];

  retrieveAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      resolve(this._users);
    });
  }
}