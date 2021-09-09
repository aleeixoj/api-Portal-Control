/* eslint-disable import/no-duplicates */
import { parse, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
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

    const data_inicio = parse(calendar, 'yyyy-MM-dd', new Date(), {
      locale: ptBR,
    });

    try {
      await createIncUseCase.execute({
        celulas,
        data_inicio,
        descricao,
        inc,
        sistema,
        sites,
        status,
        impacto,
      });

      return response.status(201).json({ message: 'Incidente cadastrado' });
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}

export { CreateIncController };
