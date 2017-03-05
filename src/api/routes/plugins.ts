import * as express from 'express';
import { Request, Response } from 'express';
import * as logger from 'winston';

import PluginRepository from '../services/plugin.repo';

let router = express.Router();
let pluginRepo = new PluginRepository();

// GET route
router.get('/', async (req: Request, resp: Response) => {

    logger.info('Retrieving plugins');
    try {
        let plugins = await pluginRepo.retrieveAll();
        resp.json(plugins);
    } catch (error) {
        logger.error(error);
        resp.sendStatus(500);
    }
});

// GET route with id
router.get('/:id', async (req: Request, resp: Response) => {
    logger.info(`Retrieving plugin id ${req.params.id}`);
    try {
        let plugin = await pluginRepo.retrieve(+req.params.id);
        resp.json(plugin);
    } catch (error) {
        logger.error(error);
        if (error.indexOf('Invalid id') > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
});

// POST route
router.post('/', async (req: Request, resp: Response) => {
    logger.info(`Creating plugin: ${JSON.stringify(req.body)}`);
    try {
        let plugin = await pluginRepo.create(req.body);
        resp.json(plugin);
    } catch (error) {
        logger.error(error);
        if (error.indexOf('Plugin exists') > -1) {
            resp.sendStatus(400);
            return;
        }
        resp.sendStatus(500);
    }
});

// PUT route
router.put('/', async (req: Request, resp: Response) => {
    logger.info(`Updating plugin id ${req.body.pluginId} to: ${JSON.stringify(req.body)}`);
    try {
        let plugin = await pluginRepo.update(req.body);
        resp.json(plugin);
    } catch (error) {
        logger.error(error);
        if (error.indexOf('Invalid id') > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
});

// DELETE route with id
router.delete('/:id', async (req: Request, resp: Response) => {
    logger.info(`Deleting plugin id ${req.params.id}`);
    try {
        await pluginRepo.delete(+req.params.id);
        resp.end();
    } catch (error) {
        logger.error(error);
        if (error.indexOf('Invalid id') > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
});

// Export plugin router module
export { router as pluginsRouter };
