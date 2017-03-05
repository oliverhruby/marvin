import { User } from '../models/user';
import { Repository } from './repository';

export default class UserRepository extends Repository<User> {

  private _users = [
    new User(1, 'User 1'),
    new User(2, 'User 2'),
    new User(3, 'User 3')
  ];

  retrieveAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM users', function(err, rows) {
        resolve(rows);
      });
    });
  }

  retrieve(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
      let user = this.getUser(id);
      if (user === null) {
        reject(`Invalid id: ${id}`);
      }
      resolve(user);
    });
  }

  create(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      if (this.getUser(user.id) !== null) {
        reject(`User exists with id: ${user.id}`);
      }
      this._users.push(user);
      resolve(user);
    });
  }

  delete(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.getUser(id) === null) {
        reject(`Invalid id: ${id}`);
      }
      this._users.splice(id - 1, 1);
      resolve();
    });
  }

  update(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      let existingUser = this.getUser(user.id);
      if (existingUser === null) {
        reject(`Invalid id: ${user.id}`);
      }
      let index = this._users.indexOf(existingUser);
      this._users[index] = user;
      resolve(user);
    });
  }

  private getUser(id: number): User | null {
    let users: User[] = this._users
      .filter(u => u.id === id);
    if (users.length > 0) {
      return users[0];
    }
    return null;
  }

}
