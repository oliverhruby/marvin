import * as express from 'express';
import { Request, Response } from 'express';
import { UserController } from '../controllers/user-controller';

let router = express.Router();
let userController = new UserController();

router.get('/', async (req: Request, resp: Response) => userController.getAll(req, resp));
router.get('/:id', async (req: Request, resp: Response) => userController.get(req, resp));
router.post('/', async (req: Request, resp: Response) => userController.create(req, resp));
router.patch('/:id', async (req: Request, resp: Response) => userController.update(req, resp));
router.delete('/:id', async (req: Request, resp: Response) => userController.delete(req, resp));

// Export user router module
export { router as usersRouter };
