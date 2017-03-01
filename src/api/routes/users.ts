import * as express from 'express';
import { Request, Response } from 'express';

import UserRepository from '../services/user.repo';

let router = express.Router();
let userRepo = new UserRepository();

// GET route
router.get('/', async (req: Request, resp: Response) => {
    console.log('Retrieving users');
    try {
        let users = await userRepo.retrieveAll();
        resp.json(users);
    } catch (error) {
        console.log(error);
        resp.sendStatus(500);
    }
});

// GET route with id
router.get('/:id', async (req: Request, resp: Response) => {
    console.log(`Retrieving user id ${req.params.id}`);
    try {
        let user = await userRepo.retrieve(+req.params.id);
        resp.json(user);
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
    console.log(`Creating user: ${JSON.stringify(req.body)}`);
    try {
        let user = await userRepo.create(req.body);
        resp.json(user);
    } catch (error) {
        console.log(error);
        if (error.indexOf('User exists') > -1) {
            resp.sendStatus(400);
            return;
        }
        resp.sendStatus(500);
    }
});

// PUT route
router.put('/', async (req: Request, resp: Response) => {
    console.log(`Updating user id ${req.body.userId} to: ${JSON.stringify(req.body)}`);
    try {
        let user = await userRepo.update(req.body);
        resp.json(user);
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
    console.log(`Deleting user id ${req.params.id}`);
    try {
        await userRepo.delete(+req.params.id);
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

// Export user router module
export { router as usersRouter };
