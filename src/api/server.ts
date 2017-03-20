import * as express from 'express';
import * as http from 'http';
import * as url from 'url';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as chalk from 'chalk';
import * as os from 'os';
import * as path from 'path';
import * as sqlite3 from 'sqlite3';
import * as ws from 'ws';
import * as jwt from 'jsonwebtoken';
import { Log } from './services/log';
import { scenesRouter } from './routes/scenes';
import { usersRouter } from './routes/users';
import { MessageSocket } from './sockets';

/**
 * Backend server functionality wrapped as a class
 */
class Server {
  public app: any;
  private server: any;
  private ws: any;
  private port: number;
  private root: string;
  private clients: number;
  private usersConnected: number;

  // Bootstrap the application.
  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.usersConnected = 0;

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

    // loged in users
    this.clients = 0;
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

    this.app.get('/api/usersConnected', (req: Request, resp: Response) => {
      resp.send(this.usersConnected.toString());
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

      db.run('DROP TABLE IF EXISTS scenes');
      db.run('CREATE TABLE scenes (id INTEGER, name TEXT, description TEXT, file TEXT)');
      // tslint:disable-next-line:max-line-length
      db.run('INSERT INTO scenes (id, name, description, file) VALUES' +
        ' (1, \'Marvin\', \'Example scene that visualizes a robotic rover vehicle. Each person connected to this scene will be given a vehicle.\', \'marvin.babylon\')');
      // tslint:disable-next-line:max-line-length
      db.run('INSERT INTO scenes (id, name, description, file) VALUES ' +
        '(2, \'Robot Arm\', \'Each person connected to this scene will be given a robotic manipulator and a task to complete. \', \'robot.babylon\')');

      db.run('DROP TABLE IF EXISTS users');
      db.run('CREATE TABLE users (id INTEGER, name TEXT, email TEXT)');
      db.run('INSERT INTO users (id, name, email) VALUES (1, \'Oliver Hruby\', \'oliverhruby@gmail.com\')');
      db.run('INSERT INTO users (id, name, email) VALUES (2, \'Joe Example\', \'joe.example@gmail.com\')');

    });
    db.close();
  }

  /**
   * Configure sockets
   */
  private sockets(): void {
    let server = new ws.Server({server: this.server});
    server.on('connection', ws => {
      this.usersConnected++;
      const location = url.parse(ws.upgradeReq.url, true);
      Log.info('SOCKET', 'Socket connection with token ' + chalk.gray(location.query.access_token));

      // START: Testing tokens -----------
      let token = jwt.sign({name: 'iostreamer'}, 'secret-key', {
        expiresIn : 15 * 24 * 60 * 60 * 1000 // 15 days
      });
      Log.info('TOKEN', 'Signed: ' + chalk.gray(token));

      jwt.verify(token, 'secret-key', function(err, decoded) {
        Log.info('TOKEN', 'Verified: ' + chalk.gray(decoded.name));
      });
      // END: Testing tokens -------------

      ws.on('message', message => {
        Log.info('SOCKET', 'Socket message: ' + chalk.gray(message));
      });

      let me = this;
      ws.on('close', function(reasonCode, description) {
        me.usersConnected--;
        Log.info('SOCKET', 'Peer disconnected.');
      });
    });

  }

  /**
   * Start HTTP server listening
   */
  private listen(): void {
    // listen on provided ports
    this.server.listen(this.port, '0.0.0.0');

    // add error handler
    this.server.on('error', (error: any) => {
      Log.error('SERVER', error);
    });

    // start listening on port
    this.server.on('listening', () => {
      Log.info('SERVER', 'Listening on ' + chalk.gray(`http://localhost:${this.port}`));
    });
  }
}

// Bootstrap the server
let server = Server.bootstrap();
export = server;
