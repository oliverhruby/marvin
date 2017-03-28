import * as express from 'express';
import { Request, Response } from 'express';
import { SceneController } from '../controllers/scene-controller';

let router = express.Router();
let sceneController = new SceneController();

router.get('/', async (req: Request, resp: Response) => sceneController.getAll(req, resp));
router.get('/:id', async (req: Request, resp: Response) => sceneController.get(req, resp));
router.post('/', async (req: Request, resp: Response) => sceneController.create(req, resp));
router.put('/', async (req: Request, resp: Response) => sceneController.update(req, resp));
router.delete('/', async (req: Request, resp: Response) => sceneController.delete(req, resp));

// Export scene router module
export { router as scenesRouter };
