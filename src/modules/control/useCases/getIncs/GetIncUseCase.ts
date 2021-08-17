import { inject, injectable } from 'tsyringe';

import { Incs } from '../../entities/Incs';
import { IIncsRepository } from '../../repositories/IIncsRepository';

@injectable()
class GetIncUseCase {
  constructor(
    @inject('IncsRepository')
    private incsRepository: IIncsRepository
  ) {}
  async execute(): Promise<Incs[]> {
    const incs = this.incsRepository.getIncs();
    if (!incs) {
      throw new Error('Não foi possivel buscar os incidentes');
    }
    return incs;
  }
}

export { GetIncUseCase };
