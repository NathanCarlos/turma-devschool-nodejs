import { Request, Response, Router } from 'express';
import { Student } from '../models/students.model';

const router = Router();

router.get('/students', (req: Request, res: Response) => {
    const students: Array<Student> = [
        {
            id: 1,
            name: 'Nathan'
        },
        {
            id: 2,
            name: 'Matheus'
        }
    ];
    res.send(students);
});

export default router;