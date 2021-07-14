import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateIncUseCase } from './CreateIncUseCase';

class CreateIncController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      celulas,
      data_inicio,
      descricao,
      incidente,
      sistema,
      sites,
      status,
      tipo_falha,
    } = request.body;

    const createIncUseCase = container.resolve(CreateIncUseCase);

    try {
      await createIncUseCase.execute({
        celulas,
        data_inicio,
        descricao,
        incidente,
        sistema,
        sites,
        status,
        tipo_falha,
      });
      return response.status(201).send();
    } catch (error) {
      return response
        .status(400)
        .json({ status_message: 'Ocorreu um erro ao criar novo incidente' });
    }
  }
}

export { CreateIncController };
