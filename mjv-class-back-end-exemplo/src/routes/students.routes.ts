import { Request, Response, Router } from 'express';
import { Student } from '../models/students.model';
import { StudentsService } from '../services/students.service';
import { generateMessageObject } from '../utils/message.utils';

const studentsService = new StudentsService();

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const students = studentsService.getStudents();
    res.send(students);
});

router.get('/details/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const student = studentsService.getStudentById(id);
    if(!student) {
        return res.send(generateMessageObject("Estudante não encontrado!"));
    }
    res.send(student);
});

router.post('/create', (req: Request, res: Response) => {
    if(!req.body.student) {
        return res.status(400).send(generateMessageObject("A propriedade student é obrigatória."));
    }

    const student: Student = req.body?.student;

    const studentCreated = studentsService.createStudent(student);

    res.status(201).send(studentCreated);
});

router.put('/update', (req: Request, res: Response) => {
    if(!req.body.student) {
        return res.status(400).send(generateMessageObject("A propriedade student é obrigatória."));
    }

    const student: Student = req.body?.student;

    const updatedStudent = studentsService.updateStudent(student);

    if(!updatedStudent) return res.status(400).send(generateMessageObject("Esse estudante não exite."));

    res.status(200).send(updatedStudent);
});

router.delete('/remove', (req: Request, res: Response) => {
    const id = req.body?.id;
    if(!id) {
        return res.status(400).send(generateMessageObject("A propriedade id é obrigatória."));
    }
    res.status(200).send(studentsService.deleteStudent(Number(id)));
});

export default router;