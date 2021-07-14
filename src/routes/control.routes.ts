import { Router } from 'express';

import { CreateIncController } from '../modules/control/useCases/createInc/CreateIncController';
import { GetIncController } from '../modules/control/useCases/getIncs/GetIncController';
import { ListController } from '../modules/control/useCases/list/ListController';

const controlRoutes = Router();

const createIncController = new CreateIncController();
const listController = new ListController();
const getIncController = new GetIncController();

controlRoutes.post('/', createIncController.handle);

controlRoutes.get('/', listController.handle);

controlRoutes.get('/get', getIncController.handle);

export { controlRoutes };
