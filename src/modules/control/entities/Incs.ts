import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  database: 'administrativo',
  name: 'diario_historico',
})
class Incs {
  @PrimaryColumn()
  Cod: string;
  @Column()
  incidente: string;
  @Column()
  status: string;
  @Column()
  tipo_falha: string;
  @CreateDateColumn()
  data_inicio: Date;
  @Column()
  descricao: string;
  @Column()
  sistema: string;
  @Column()
  celulas: string;
  @Column()
  sites: Array<string>;
}

export { Incs };
