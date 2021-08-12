import { Request, Response } from 'express';
import express from 'express';
import statusRoutes from './routes/status.routes';
import studentsRoutes from './routes/students.routes';

const port = 3000;
const app = express();
app.use(statusRoutes);
app.use(studentsRoutes);

app.listen(port, () => {
    console.log(`Aplicação está rodando na porta: ${port}`);
});