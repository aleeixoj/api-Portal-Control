import { container } from 'tsyringe';

import { IIncsRepository } from '../../modules/control/repositories/IIncsRepository';
import { IncsRepository } from '../../modules/control/repositories/implementations/IncsRepository';

container.registerSingleton<IIncsRepository>('IncsRepository', IncsRepository);