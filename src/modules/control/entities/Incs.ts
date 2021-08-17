import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
} from 'typeorm';

@Entity({
  database: 'administrativo',
  name: 'diario_historico',
})
class Incs {
  @Generated()
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
  @CreateDateColumn()
  data_fim: Date;
  @Column()
  descricao: string;
  @Column()
  sistema: string;
  @Column()
  celulas: string;
  @Column()
  sites: string;
}

export { Incs };
