import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetIncUseCase } from './GetIncUseCase';

class GetIncController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getIncUseCase = container.resolve(GetIncUseCase);
    try {
      const incs = await getIncUseCase.execute();
      return response.json({ incs });
    } catch (error) {
      return response.status(500).json({ status_message: error });
    }
  }
}

export { GetIncController };
