// https://github.com/tonysneed/Demo.Express.Angular-CLI

import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as os from 'os';
import * as path from 'path';

import { pluginsRouter } from './routes/plugins';
import { scenesRouter } from './routes/scenes';
import { usersRouter } from './routes/users';

namespace express_web_api {

    // Initialize express and set port number
    let app = express();
    let port: number = process.env.PORT || 3000;

    // Plug in body parser middleware for posting JSON
    app.use(bodyParser.json());

    // Add routers
    app.use('/api/plugins', pluginsRouter);
    app.use('/api/scenes', scenesRouter);
    app.use('/api/users', usersRouter);

    // Point static path to dist
    app.use(express.static(path.join(__dirname, '../../dist')));

    // Handle GET for the root URL
    app.get('/api', (req: Request, res: Response) => {
        res.send('API works!');
    });

    // Return version info (TODO: move to separate router)
    app.get('/api/version', (req: Request, resp: Response) => {
      resp.send('{\n'
        + '  "nodejs": "' + process.version + '",\n'
        + '  "os": {\n'
        + '    "freemem": "' + os.freemem() + '",\n'
        + '    "hostname": "' + os.hostname() + '",\n'
        + '    "platform": "' + os.platform() + '",\n'
        + '    "release": "' + os.release() + '",\n'
        + '    "totalmem": "' + os.totalmem() + '",\n'
        + '    "type": "' + os.type() + '",\n'
        + '    "uptime": "' + os.uptime() + '"\n'
        + '  }\n'
        + '}');
    });

    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
    });

    // Start the web app
    app.listen(port, () => console.log(`Express app listening on port ${port}`));
}

// Application database setup
import sqlite3 = require('sqlite3');
let fs = require('fs');
let file = 'src/api/marvin.db';
let exists = fs.existsSync(file);
sqlite3.verbose();
let db = new sqlite3.Database(file);
db.serialize(function() {
  db.run('DROP TABLE scenes');
  db.run('CREATE TABLE scenes (id INTEGER, name TEXT, description TEXT)');
  db.run('INSERT INTO scenes (id, name, description) VALUES (1, \'Marvin\', \'Example scene that visualizes a robotic rover vehicle\')');
  db.run('INSERT INTO scenes (id, name, description) VALUES (2, \'Robot Arm\', \'Visualisation of an example industrial manipulator\')');
});
db.close();
