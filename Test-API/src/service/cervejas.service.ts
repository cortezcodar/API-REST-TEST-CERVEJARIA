
import { CervejasRepository } from "../repositories/cervejas.repository";
import { SportfyService } from "./sportfy.service";

export class CervejasService {
    private repository: CervejasRepository;
    private sportfy: SportfyService

    constructor() {

        this.repository = new CervejasRepository
        this.sportfy = new SportfyService

    }

    public async registrar({ name, temperaturaMax, temperaturaMin }: any) {

        const produto = await this.repository.encontrarCervejaPeloNome(name)
        if (produto) {
            return null
        }


        const cerveja = await this.repository.salvarCerveja({

            name,
            temperaturaMax,
            temperaturaMin

        })

        return { cerveja }
    }

    public async listargem({ }) {

        const listar = await this.repository.listaDeCervejas({})

        return listar
    }

    public async atualizarProdutos({ id, name, temperaturaMax, temperaturaMin }: any) {

        const produtos = await this.repository.buscarCervejaPeloId(id)

        if (!produtos) {

            throw new Error("Produto Não existe");

        }

        return await this.repository.atualizarCerveja({ id, name, temperaturaMax, temperaturaMin })

    }

    public async deletarCervejaPorId({ id }: any) {

        const produto = await this.repository.buscarCervejaPeloId(id)


        if (!produto) {


            throw new Error("Produto Não existe");

        }

        await this.repository.deletarCerveja({ id, })

        return produto

    }

    public async buscarCervejaPorTemperatura({ temperatura }: any) {

        const cervejas = await this.repository.buscarCervejaPelaTemperatura(temperatura)

        const promises = cervejas.map(async (cerveja, index) => {
            await this.sportfy.buscarPlaylistPorNome(cerveja.name)
            console.log(cerveja.name);

            const playlist = await this.sportfy.buscarPlaylistPorNome(cerveja.name)
            return {
                "beerStyle": cerveja.name,
                playlist

            }
        })

        return Promise.all(promises);

    }

}


