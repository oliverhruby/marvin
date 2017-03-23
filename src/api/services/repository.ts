import * as sqlite3 from 'sqlite3';

/**
 * Base class for common repository functionality
 */
export class Repository<T> {

  db: any;

  constructor() {
    this.db = new sqlite3.Database('api/database/marvin.db');
  }

}
