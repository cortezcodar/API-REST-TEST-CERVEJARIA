
import 'reflect-metadata'
import 'dotenv'
import express, { Request, Response } from 'express';
import { appDataSource } from './data-soucer';
import routes from './routes';

appDataSource.initialize().then(() => {


    const app = express();

    app.use(express.json())
    app.use(routes)

    app.get('/', (req: Request, res: Response) => {

    });

    return app.listen(process.env.PORT, () => {
        console.log('servidor rodando', process.env.PORT)
    })


});


