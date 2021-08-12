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
    const connectionStatus = await connection;
    console.log(`Aplicação está rodando na porta: ${port}`);
    console.log(`Status do banco de dados: ${connectionStatus.isConnected ? 'conectado':'desconectado'}`);
});