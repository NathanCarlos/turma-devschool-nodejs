import { Request, Response, Router } from 'express';
import { StudentsServices } from '../services/students.service';
import { createMessageObject } from '../utils/message.utils';

const studentsServices = new StudentsServices();

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    const students = studentsServices.getStudents();
    res.send(students);
});

routes.get('/details/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const student = studentsServices.getStudentById(Number(id));
    if(!student) {
        return res.status(404).send(createMessageObject("Estudante não encontrado!"));
    }
    res.send(student);
});

routes.post('/create', (req: Request, res: Response) => {
    const student = req.body;
    if(!student) {
        return res.status(400).send(createMessageObject("Estudante é obrigatório!" ));
    }
    const studentReturn = studentsServices.createStudent(student);
    res.status(201).send(studentReturn);
});

routes.post('/create-multiple', (req: Request, res: Response) => {
    const students = req.body.students;
    if(!students) {
        return res.status(400).send(createMessageObject("Estudantes são obrigatórios!"));
    }
    const studentReturn = studentsServices.createStudents(students);
    res.status(201).send(studentReturn);
});

routes.delete('/remove', (req: Request, res: Response) => {
    const studentId = req.body.id;
    if(!studentId) {
        return res.status(400).send(createMessageObject("Id do estudante é obrigatório!" ));
    }
    const studentDeletedReturn = studentsServices.removeStudent(Number(studentId));
    res.send(studentDeletedReturn);
});

routes.put('/update', (req: Request, res: Response) => {
    const student = req.body;
    if(!student) {
        return res.status(400).send(createMessageObject("Dados do estudante são obrigatórios!"));
    }
    const studentUpdatedReturn = studentsServices.updateStudent(student);
    res.send(studentUpdatedReturn);
});

export default routes;