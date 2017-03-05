import * as express from 'express';
import * as http from 'http';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as os from 'os';
import * as path from 'path';
import sqlite3 = require('sqlite3');
import * as socketIo from 'socket.io';
import * as logger from 'winston';

import { pluginsRouter } from './routes/plugins';
import { scenesRouter } from './routes/scenes';
import { usersRouter } from './routes/users';
import { RoomSocket } from './sockets';

/**
 * Backend server functionality wrapped as a class
 */
class Server {
  public app: any;
  private server: any;
  private io: any;
  private port: number;
  private root: string;

  // Bootstrap the application.
  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    // Create expressjs application
    this.app = express();
    this.server = http.createServer(this.app);

    this.config();
    this.routes();

    // Create database connections
    this.databases();

    // Handle websockets
    this.sockets();

    // Start listening
    this.listen();

    winston.info('Server started!');
  }

  /**
   * Configuration
   */
  private config(): void {
    // By default the port should be 3000
    this.port = process.env.PORT || 3000;

    // root path is under ../../target
    this.root = path.join(path.resolve(__dirname, '../../target'));

    // Plug in body parser middleware for posting JSON
    this.app.use(bodyParser.json());
  }

  /**
   * Configure routes
   */
  private routes(): void {
    let router: express.Router;
    router = express.Router();

    // Add routers
    this.app.use('/api/plugins', pluginsRouter);
    this.app.use('/api/scenes', scenesRouter);
    this.app.use('/api/users', usersRouter);

    // Handle GET for the root URL
    this.app.get('/api', (req: Request, res: Response) => {
      res.send('API works!');
    });

    // Point static path to dist
    this.app.use(express.static(path.join(__dirname, '../../dist')));

    // Return version info (TODO: move to separate router)
    this.app.get('/api/version', (req: Request, resp: Response) => {
      resp.send('{\n' +
        '  "nodejs": "' + process.version + '",\n' +
        '  "os": {\n' +
        '    "freemem": "' + os.freemem() + '",\n' +
        '    "hostname": "' + os.hostname() + '",\n' +
        '    "platform": "' + os.platform() + '",\n' +
        '    "release": "' + os.release() + '",\n' +
        '    "totalmem": "' + os.totalmem() + '",\n' +
        '    "type": "' + os.type() + '",\n' +
        '    "uptime": "' + os.uptime() + '"\n' +
        '  }\n' +
        '}');
    });

    // Catch all other routes and return the index file
    this.app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
    });
  }

  /**
   * Configure databases
   */
  private databases(): void {
    let fs = require('fs');
    let file = 'src/api/database/marvin.db';
    let exists = fs.existsSync(file);
    sqlite3.verbose();
    let db = new sqlite3.Database(file);
    db.serialize(function () {
      db.run('DROP TABLE scenes');
      db.run('CREATE TABLE scenes (id INTEGER, name TEXT, description TEXT)');
      // tslint:disable-next-line:max-line-length
      db.run('INSERT INTO scenes (id, name, description) VALUES (1, \'Marvin\', \'Example scene that visualizes a robotic rover vehicle\')');
      db.run('INSERT INTO scenes (id, name, description) VALUES (2, \'Robot Arm\', \'Visualisation of an example industrial manipulator\')');
    });
    db.close();
  }

  /**
   * Configure sockets
   */
  private sockets(): void {
    // Get socket.io handle
    this.io = socketIo(this.server);
    let roomSocket = new RoomSocket(this.io);
  }

  /**
   * Start HTTP server listening
   */
  private listen(): void {
    // listen on provided ports
    this.server.listen(this.port);

    // add error handler
    this.server.on('error', (error: any) => {
      winston.error(error);
    });

    // start listening on port
    this.server.on('listening', () => {
      winston.log('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', this.port, this.port);
    });
  }
}

// Bootstrap the server
let server = Server.bootstrap();
export = server;
