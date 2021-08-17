import { inject, injectable } from 'tsyringe';

import {
  IIncsRepository,
  ICreateIncDTO,
} from '../../repositories/IIncsRepository';

@injectable()
class CreateIncUseCase {
  constructor(
    @inject('IncsRepository')
    private incsRepository: IIncsRepository
  ) {}
  async execute({
    inc,
    celulas,
    data_inicio,
    descricao,
    sistema,
    sites,
    status,
    impacto,
  }: ICreateIncDTO): Promise<void> {
    await this.incsRepository.create({
      inc,
      celulas,
      data_inicio,
      descricao,
      sistema,
      sites,
      status,
      impacto,
    });
  }
}
export { CreateIncUseCase };
