import { Message } from '../models';
import { Repository } from './repository';

export default class MessageService extends Repository<Message> {

  retrieveAll(): Promise<Message[]> {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM messages', function(err, rows) {
        resolve(rows);
      });
    });
  }

}
