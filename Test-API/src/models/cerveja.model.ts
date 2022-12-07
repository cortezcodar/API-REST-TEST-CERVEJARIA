import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("cerveja")
export class Cerveja {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "name", type: 'varchar', unique: true })
    name: string

    @Column({ name: "temperatura_max", type: 'decimal', precision: 7, scale: 2 })
    temperaturaMax: number

    @Column({ name: "temperatura_min", type: 'decimal', precision: 7, scale: 2 })
    temperaturaMin: number


    @CreateDateColumn()
    criado_Em: Date;

    @UpdateDateColumn()
    atualizado_em: Date







}
