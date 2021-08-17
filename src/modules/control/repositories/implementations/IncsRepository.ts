import { getRepository, MoreThan, Repository } from 'typeorm';

import { Incs } from '../../entities/Incs';
import { ICreateIncDTO, IIncsRepository } from '../IIncsRepository';

class IncsRepository implements IIncsRepository {
  private incs: Repository<Incs>;
  constructor() {
    this.incs = getRepository(Incs);
  }
  async getIncs(): Promise<Incs[]> {
    const ourDate = new Date();
    const pastDate = ourDate.getDate() - 7;
    ourDate.setDate(pastDate);
    const today = new Date();
    const ontem = today.getDate() - 1;
    today.setDate(ontem);

    const incs = await this.incs.find({
      order: { data_inicio: 'DESC' },
      where: [
        { status: 'Aberto', data_inicio: MoreThan(ourDate) },
        { status: 'Fechado', data_inicio: MoreThan(today) },
      ],
    });
    return incs;
  }
  async findById(Cod: string): Promise<Incs> {
    const inc = await this.incs.findOne({ Cod });
    return inc;
  }
  async updateIncById(Cod: string, desc: string): Promise<void> {
    await this.incs.update(Cod, { descricao: desc });
  }
  async closeIncById(Cod: string): Promise<void> {
    await this.incs.update(Cod, { status: 'Fechado' });
  }
  async list(): Promise<Incs[]> {
    const incs = await this.incs.find();
    return incs;
  }
  async create({
    inc,
    status,
    impacto,
    data_inicio,
    descricao,
    sistema,
    celulas,
    sites,
  }: ICreateIncDTO): Promise<void> {
    const createInc = this.incs.create({
      incidente: inc,
      status,
      tipo_falha: impacto,
      data_inicio,
      descricao,
      sistema,
      celulas,
      sites,
    });

    await this.incs.save(createInc);
  }
}

export { IncsRepository };
