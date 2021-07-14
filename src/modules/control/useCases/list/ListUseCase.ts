import { inject, injectable } from 'tsyringe';

import { Incs } from '../../entities/Incs';
import { IIncsRepository } from '../../repositories/IIncsRepository';

@injectable()
class ListUseCase {
  constructor(
    @inject('IncsRepository')
    private incsRepository: IIncsRepository
  ) {}
  async execute(): Promise<Incs[]> {
    const incs = await this.incsRepository.list();
    return incs;
  }
}
export { ListUseCase };
