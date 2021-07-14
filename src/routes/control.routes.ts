import { Router } from 'express';

import { CreateIncController } from '../modules/control/useCases/createInc/CreateIncController';
import { ListController } from '../modules/control/useCases/list/ListController';

const controlRoutes = Router();

const createIncController = new CreateIncController();
const listController = new ListController();

controlRoutes.post('/', createIncController.handle);

controlRoutes.get('/', listController.handle);

export { controlRoutes };
