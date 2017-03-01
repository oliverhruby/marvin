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
    app.get('/version', (req: Request, resp: Response) => {
      resp.send('{\n'
        + '  \'nodejs\': \'' + process.version + '\',\n'
        + '  \'os\': {\n'
        + '    \'freemem\': \'' + os.freemem() + '\'\n'
        + '    \'hostname\': \'' + os.hostname() + '\'\n'
        + '    \'platform\': \'' + os.platform() + '\'\n'
        + '    \'release\': \'' + os.release() + '\'\n'
        + '    \'totalmem\': \'' + os.totalmem() + '\'\n'
        + '    \'type\': \'' + os.type() + '\'\n'
        + '    \'uptime\': \'' + os.uptime() + '\'\n'
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
