import * as express from 'express';
import { Request, Response } from 'express';
import * as logger from 'winston';

import UserService from '../services/user.service';

let router = express.Router();
let userService = new UserService();

// GET route
router.get('/', async (req: Request, resp: Response) => {
    logger.info('Retrieving users');
    try {
        let users = await userService.retrieveAll();
        resp.json(users);
    } catch (error) {
        logger.error(error);
        resp.sendStatus(500);
    }
});

// GET route with id
router.get('/:id', async (req: Request, resp: Response) => {
    logger.info(`Retrieving user id ${req.params.id}`);
    try {
        let user = await userService.retrieve(+req.params.id);
        resp.json(user);
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
    logger.info(`Creating user: ${JSON.stringify(req.body)}`);
    try {
        let user = await userService.create(req.body);
        resp.json(user);
    } catch (error) {
        logger.error(error);
        if (error.indexOf('User exists') > -1) {
            resp.sendStatus(400);
            return;
        }
        resp.sendStatus(500);
    }
});

// PUT route
router.put('/', async (req: Request, resp: Response) => {
    logger.info(`Updating user id ${req.body.userId} to: ${JSON.stringify(req.body)}`);
    try {
        let user = await userService.update(req.body);
        resp.json(user);
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
    logger.info(`Deleting user id ${req.params.id}`);
    try {
        await userService.delete(+req.params.id);
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

// Export user router module
export { router as usersRouter };
