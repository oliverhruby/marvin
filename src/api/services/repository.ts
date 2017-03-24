import * as path from 'path';
import * as sqlite3 from 'sqlite3';

/**
 * Base class for common repository functionality
 */
export class Repository<T> {

  db: any;

  constructor() {
    let file = path.join(path.resolve(__dirname, '../database/marvin.db'));
    console.log(file);
    this.db = new sqlite3.Database(file);
  }

}
