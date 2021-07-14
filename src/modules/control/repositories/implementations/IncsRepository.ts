import { getRepository, Repository } from 'typeorm';

import { Incs } from '../../entities/Incs';
import { ICreateIncDTO, IIncsRepository } from '../IIncsRepository';

class IncsRepository implements IIncsRepository {
  private incs: Repository<Incs>;
  constructor() {
    this.incs = getRepository(Incs);
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
    incidente,
    status,
    tipo_falha,
    data_inicio,
    descricao,
    sistema,
    celulas,
    sites,
  }: ICreateIncDTO): Promise<void> {
    const createInc = this.incs.create({
      incidente,
      status,
      tipo_falha,
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
