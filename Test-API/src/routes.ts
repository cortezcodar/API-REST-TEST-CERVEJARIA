
import { request, Request, response, Response, Router } from "express";
import { CervejasController, } from "./controllers/cervejas.controllers";








const router = Router()


const cervejasController = new CervejasController()

router.post('/cervejas', async (req: Request, res: Response) => {

    await cervejasController.cadastrar(req, res)
})



router.put('/cervejas/:id', async (req: Request, res: Response) => {

    await cervejasController.editar(req, res);

})

router.delete('/cervejas/:id', async (req: Request, res: Response) => {

    await cervejasController.deletar(req, res);

})

router.get('/cervejas', async (req: Request, res: Response) => {

    await cervejasController.listar(req, res)
})

router.get('/cervejas/buscar', async (req: Request, res: Response) => {

    await cervejasController.buscarCervejasPorTemperatura(req, res)
})


export default router