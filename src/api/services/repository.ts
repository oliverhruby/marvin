import sqlite3 = require('sqlite3');

/**
 * Base class for common repository functionality
 */
export class Repository<T> {

  db: any;

  constructor() {
    this.db = new sqlite3.Database('src/api/marvin.db');
  }

}
