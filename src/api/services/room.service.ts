import { Room } from '../models';
import { Repository } from './repository';

export default class RoomService extends Repository<Room> {

  private _scenes: Room[] = [
    { name: 'Room 1', created: new Date() },
    { name: 'Room 2', created: new Date() }
  ];

  retrieveAll(): Promise<Room[]> {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM scenes', function(err, rows) {
        resolve(rows);
      });
    });
  }

}
