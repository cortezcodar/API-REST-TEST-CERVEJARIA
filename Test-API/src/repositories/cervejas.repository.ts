



import { appDataSource } from "../data-soucer";
import { Cerveja } from "../models/cerveja.model";
import { MoreThanOrEqual } from "typeorm"
import { LessThanOrEqual } from "typeorm"

const dataSourceRepository = appDataSource.getRepository(Cerveja)
type AtualizarCervejaParams = {
    temperaturaMax: number,
    temperaturaMin: number,
    name: string
    id: number


}

export class CervejasRepository {


    public async encontrarCervejaPeloNome(name: string) {

        const cerveja = await dataSourceRepository.findOneBy({
            name: name
        })
        return cerveja

    }

    public async buscarCervejaPelaTemperatura(temperatura: number) {


        const cerveja = await dataSourceRepository.find({
            where: [{

                temperaturaMax: MoreThanOrEqual(temperatura),
                temperaturaMin: LessThanOrEqual(temperatura),

            }],

            order: {
                name: "ASC",
                id: "DESC",
            },


        })
        return cerveja


    }

    public async buscarCervejaPeloId(id: number) {

        const cerveja = await dataSourceRepository.findOneBy({

            id: id


        })

        return cerveja
    }


    public salvarCerveja({ name, temperaturaMax, temperaturaMin }: any) {
        const cervejas = dataSourceRepository.create({ name, temperaturaMax, temperaturaMin })

        const cerveja = dataSourceRepository.save(cervejas)

        return cerveja
    }

    public async atualizarCerveja({ id, name, temperaturaMax, temperaturaMin }: AtualizarCervejaParams) {

        const updatcerveja = await dataSourceRepository.update(id, { name, temperaturaMax, temperaturaMin })
        return updatcerveja
    }

    public async deletarCerveja({ id }: any) {

        const deletcerveja = await dataSourceRepository.delete({ id })

        return deletcerveja

    }

    public async listaDeCervejas({ name }: any) {

        const cerveja = await dataSourceRepository.find(name)

        return cerveja

    }


}