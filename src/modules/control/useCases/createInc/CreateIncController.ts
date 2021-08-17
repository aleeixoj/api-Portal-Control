import { parseISO, format } from 'date-fns';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateIncUseCase } from './CreateIncUseCase';

class CreateIncController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      celulas,
      calendar,
      descricao,
      inc,
      sistema,
      sites,
      status,
      impacto,
    } = request.body;

    const createIncUseCase = container.resolve(CreateIncUseCase);
    const time = Date.parse(calendar);
    const data_inicio = new Date(time);

    try {
      console.log(data_inicio);
      // await createIncUseCase.execute({
      //   celulas,
      //   data_inicio,
      //   descricao,
      //   inc,
      //   sistema,
      //   sites,
      //   status,
      //   impacto,
      // });

      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({ status_message: error.message });
    }
  }
}

export { CreateIncController };
