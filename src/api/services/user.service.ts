import { User } from '../models';
import { Repository } from './repository';

export default class UserService extends Repository<User> {

  retrieveAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM users', function(err: any, rows: any) {
        resolve(rows);
      });
    });
  }

  retrieve(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
      this.db.each('SELECT * FROM users WHERE id = ?', [id], function(err: any, rows: any) {
        resolve(rows);
      });
    });
  }

  create(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      this.db.each('INSERT INTO users (id, name, email) VALUES (?, ?, ?)', [user.id, user.name, user.email], function(err: any, rows: any) {
        resolve(rows);
      });
    });
  }

  delete(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.each('DELETE FROM users WHERE id = ?', [id], function(err: any, rows: any) {
        resolve(rows);
      });
    });
  }

  update(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      // let existingUser = this.retrieve(user.id);
      // if (existingUser === null) {
      //   reject(`Invalid id: ${user.id}`);
      // }
      // let index = this._users.indexOf(existingUser);
      // this._users[index] = user;
      resolve(user);
    });
  }

}
