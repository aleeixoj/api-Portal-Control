import { Incs } from '../entities/Incs';

interface ICreateIncDTO {
  inc: string;
  status: string;
  impacto: string;
  data_inicio: Date;
  descricao: string;
  sistema: string;
  celulas: string;
  sites: string;
}

interface IIncsRepository {
  getIncs(): Promise<Incs[]>;
  findById(Cod: string): Promise<Incs>;
  updateIncById(Cod: string, desc: string): Promise<void>;
  closeIncById(Cod: string): Promise<void>;
  list(): Promise<Incs[]>;
  create({
    inc,
    status,
    impacto,
    data_inicio,
    descricao,
    sistema,
    celulas,
    sites,
  }: ICreateIncDTO): Promise<void>;
}
export { IIncsRepository, ICreateIncDTO };
