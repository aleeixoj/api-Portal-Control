import { inject, injectable } from 'tsyringe';

import { Incs } from '../../entities/Incs';
import { IncsRepository } from '../../repositories/implementations/IncsRepository';

@injectable()
class GetIncUseCase {
  constructor(
    @inject('IncsRepository')
    private incsRepository: IncsRepository
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
