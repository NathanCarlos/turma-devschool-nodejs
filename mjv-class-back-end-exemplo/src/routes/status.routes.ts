import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send({ status: 'OK' });
});

router.get('/check', (req: Request, res: Response) => {
    res.send({ id: 1, status: 'Aplicação online' });
});

export default router;