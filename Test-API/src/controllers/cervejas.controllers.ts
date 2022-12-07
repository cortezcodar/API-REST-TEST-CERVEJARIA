
import { Request, Response } from "express";
import { CervejasService } from "../service/cervejas.service";

export class CervejasController {
    private service: CervejasService


    constructor() {
        this.service = new CervejasService();
    }

    public async cadastrar(req: Request, res: Response) {


        const { name, temperaturaMax, temperaturaMin } = req.body;


        if (!name) {
            return res.status(400).json({ msg: 'Nome obrigatorio!' })
        }

        if (!temperaturaMax && temperaturaMax != 0) {
            return res.status(400).json({ msg: 'TemperaturaMax Obrigatorio!' })

        }

        if (temperaturaMin >= temperaturaMax) {
            return res.status(400).json({ msg: 'TemperaturaMin Tem que ser menor Que TemperaturaMax' })

        }


        if (!temperaturaMin && temperaturaMin != 0) {
            return res.status(400).json({ msg: 'TemperaturaMin Obrigatorio!' })

        }



        const produto = await this.service.registrar({ name, temperaturaMax, temperaturaMin })

        if (!produto) {

            const msgJson = { msg: 'Produto Já Cadastrado com esse Nome!' }
            return res.status(400).json(msgJson)
        }



        res.status(200).json(produto)


    }

    public async listar(req: Request, res: Response) {

        const { name, temperaturaMax, temperaturaMin } = req.body;

        const listagem = await this.service.listargem({ name, temperaturaMax, temperaturaMin }
        )


        return res.status(200).json(listagem)

    }

    public async editar(req: Request, res: Response) {

        const { name, temperaturaMax, temperaturaMin } = req.body;
        const { id } = req.params;


        if (!name) {
            return res.status(400).json({ msg: 'Nome Obrigatorio!' })

        }

        if (!temperaturaMax) {
            return res.status(400).json({ msg: 'TemperaturaMax Obrigatoria!' })

        }

        if (!temperaturaMin) {

            return res.status(400).json({ msg: 'TemperaturaMin Obrigatoria!' })

        }
        try {

            return res.status(200).json(await this.service.atualizarProdutos({ id, name, temperaturaMax, temperaturaMin }))

        } catch (error) {


            return res.status(404).json({ msg: error.message })
        }


    }

    public async deletar(req: Request, res: Response) {

        const { id } = req.params;



        if (!id) {

            res.status(400).json({ msg: 'ID obrigatorio!' })

        }

        if (isNaN(id as any)) {

            res.status(400).json({ msg: 'Id deve ser do tipo number"' })
        }


        try {

            await this.service.deletarCervejaPorId({ id })

            return res.status(200).json({ msg: " Produto deletado com sucesso " })


        } catch (error) {

            return res.status(404).json({ msg: error.message })
        }


    }

    public async buscarCervejasPorTemperatura(req: Request, res: Response) {
        const { temperatura } = req.query;



        if (!temperatura) {

            res.status(400).json({ msg: 'Temperatura obrigatoria!' })

        }

        if (isNaN(temperatura as any)) {

            res.status(400).json({ msg: 'Temperatura deve ser do tipo number"' })
        }


        try {

            return res.status(200).json(await this.service.buscarCervejaPorTemperatura({ temperatura }))

        } catch (error) {


            return res.status(404).json({ msg: error.message })
        }




    }


}

