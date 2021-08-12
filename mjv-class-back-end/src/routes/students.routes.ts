import { Request, Response, Router } from 'express';
import { StudentsServices } from '../services/students.service';
import { createMessageObject } from '../utils/message.utils';

const studentsServices = new StudentsServices();

const routes = Router();

routes.get('/', async (req: Request, res: Response) => {
    const students = await studentsServices.getStudents();
    res.send(students);
});

routes.get('/details/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const student = await studentsServices.getStudentById(Number(id));
    if(!student) {
        return res.status(404).send(createMessageObject("Estudante não encontrado!"));
    }
    res.send(student);
});

routes.post('/create', async (req: Request, res: Response) => {
    const student = req.body;
    if(!student) {
        return res.status(400).send(createMessageObject("Estudante é obrigatório!" ));
    }
    const studentReturn = await studentsServices.createStudent(student);
    res.status(201).send(studentReturn);
});

routes.delete('/remove', async (req: Request, res: Response) => {
    const studentId = req.body.id;
    if(!studentId) {
        return res.status(400).send(createMessageObject("Id do estudante é obrigatório!" ));
    }
    const studentDeletedReturn = await studentsServices.removeStudent(Number(studentId));
    res.send(studentDeletedReturn);
});

routes.put('/update', async (req: Request, res: Response) => {
    const student = req.body;
    if(!student) {
        return res.status(400).send(createMessageObject("Dados do estudante são obrigatórios!"));
    }
    const studentUpdatedReturn = await studentsServices.updateStudent(student.id, student);
    res.send(studentUpdatedReturn);
});

export default routes;