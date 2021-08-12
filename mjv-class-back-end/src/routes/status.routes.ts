import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.send({ message: "Status OK" });
});

routes.get('/check', (req: Request, res: Response) => {
    res.send({ statusAplicacao: 200, mensagem: "OK" });
});

export default routes;