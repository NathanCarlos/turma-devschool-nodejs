import express, { Request, Response } from 'express';
import productRoutes from './routes/products.routes';

const app = express();
const port = 3000;

app.use(productRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Hello World' });
});

app.listen(port, () => {
    console.log(`A aplicação está online na porta: ${port}`);
});
