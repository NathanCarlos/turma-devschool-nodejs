import express from 'express';
import cors from 'cors';
import routes from './routes';

const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, () => {
    console.log(`Aplicação está rodando na porta: ${port}`);
});