import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUseCase } from './ListUseCase';

class ListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUseCase = container.resolve(ListUseCase);
    try {
      const all = await listUseCase.execute();
      return response.json(all);
    } catch (error) {
      return response.status(400).json({ status_message: 'Ocorreu um erro' });
    }
  }
}

export { ListController };
