import * as express from 'express';
import { Request, Response } from 'express';

import SceneRepository from '../services/scene.repo';

let router = express.Router();
let sceneRepo = new SceneRepository();

// GET route
router.get('/', async (req: Request, resp: Response) => {
    console.log('Retrieving scenes');
    try {
        let scenes = await sceneRepo.retrieveAll();
        resp.json(scenes);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

// GET route with id
router.get('/:id', async (req: Request, resp: Response) => {
    console.log(`Retrieving scene id ${req.params.id}`);
    try {
        let scene = await sceneRepo.retrieve(+req.params.id);
        resp.json(scene);
    } catch (error) {
        console.log(error);
        if (error.indexOf('Invalid id') > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
});

// POST route
router.post('/', async (req: Request, resp: Response) => {
    console.log(`Creating scene: ${JSON.stringify(req.body)}`);
    try {
        let scene = await sceneRepo.create(req.body);
        resp.json(scene);
    } catch (error) {
        console.log(error);
        if (error.indexOf('Scene exists') > -1) {
            resp.sendStatus(400);
            return;
        }
        resp.sendStatus(500);
    }
});

// PUT route
router.put('/', async (req: Request, resp: Response) => {
    console.log(`Updating scene id ${req.body.sceneId} to: ${JSON.stringify(req.body)}`);
    try {
        let scene = await sceneRepo.update(req.body);
        resp.json(scene);
    } catch (error) {
        console.log(error);
        if (error.indexOf('Invalid id') > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
});

// DELETE route with id
router.delete('/:id', async (req: Request, resp: Response) => {
    console.log(`Deleting scene id ${req.params.id}`);
    try {
        await sceneRepo.delete(+req.params.id);
        resp.end();
    } catch (error) {
        console.log(error);
        if (error.indexOf('Invalid id') > -1) {
            resp.sendStatus(404);
            return;
        }
        resp.sendStatus(500);
    }
});

// Export scene router module
export { router as scenesRouter };
