import express from 'express';
import cors from 'cors';
import routes from './routes';
import { connection } from './database/config';

const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, async () => {
    const connectionResult = await connection;
    console.log(`Status da conexão com banco de dados: ${connectionResult.isConnected ? 'Online' : 'Offline'}`);
    console.log(`Aplicação está rodando na porta: ${port}`);
});