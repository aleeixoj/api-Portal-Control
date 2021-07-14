import { inject, injectable } from 'tsyringe';

import {
  IIncsRepository,
  ICreateIncDTO,
} from '../../repositories/IIncsRepository';

@injectable()
class CreateIncUseCase {
  constructor(
    @inject('IncRepository')
    private incsRepository: IIncsRepository
  ) {}
  async execute({
    incidente,
    celulas,
    data_inicio,
    descricao,
    sistema,
    sites,
    status,
    tipo_falha,
  }: ICreateIncDTO): Promise<void> {
    await this.incsRepository.create({
      incidente,
      celulas,
      data_inicio,
      descricao,
      sistema,
      sites,
      status,
      tipo_falha,
    });
  }
}
export { CreateIncUseCase };
