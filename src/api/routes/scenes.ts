import * as express from 'express';
import { Request, Response } from 'express';
import SceneService from '../services/scene.service';
import * as logger from 'winston';

let router = express.Router();
let sceneService = new SceneService();

// GET route
router.get('/', async (req: Request, resp: Response) => {
    logger.info('Retrieving scenes');
    try {
        let scenes = await sceneService.retrieveAll();
        resp.json(scenes);
    } catch (error) {
        logger.error(error);
        resp.sendStatus(500);
    }
});

// GET route with id
router.get('/:id', async (req: Request, resp: Response) => {
    logger.info(`Retrieving scene id ${req.params.id}`);
    try {
        let scene = await sceneService.retrieve(+req.params.id);
        resp.json(scene);
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
    logger.info(`Creating scene: ${JSON.stringify(req.body)}`);
    try {
        let scene = await sceneService.create(req.body);
        resp.json(scene);
    } catch (error) {
        logger.error(error);
        if (error.indexOf('Scene exists') > -1) {
            resp.sendStatus(400);
            return;
        }
        resp.sendStatus(500);
    }
});

// PUT route
router.put('/', async (req: Request, resp: Response) => {
    logger.info(`Updating scene id ${req.body.sceneId} to: ${JSON.stringify(req.body)}`);
    try {
        let scene = await sceneService.update(req.body);
        resp.json(scene);
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
    logger.info(`Deleting scene id ${req.params.id}`);
    try {
        await sceneService.delete(+req.params.id);
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

// Export scene router module
export { router as scenesRouter };
