// https://github.com/tonysneed/Demo.Express.Angular-CLI

import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

import { pluginsRouter } from './routes/plugins';
import { usersRouter } from './routes/users';

namespace express_web_api {

    // Initialize express and set port number
    let app = express();
    let port: number = process.env.PORT || 3000;

    // Plug in body parser middleware for posting JSON
    app.use(bodyParser.json());

    // Add routers
    app.use('/api/plugins', pluginsRouter);
    app.use('/api/users', usersRouter);

    // Handle GET for the root URL
    app.get('/', (req: Request, resp: Response) => {
        resp.send('Hello Express!');
    });

    // Start the web app
    app.listen(port, () => console.log(`Express app listening on port ${port}`));
}