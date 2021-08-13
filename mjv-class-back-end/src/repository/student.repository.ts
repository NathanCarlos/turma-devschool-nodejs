import { getConnection } from "typeorm";
import { Student } from "../entities/student.entity";

export class StudentRepository {

    static getAll() {
        const studentRepository = getConnection().getRepository(Student);
        return studentRepository.find();
        // return studentRepository.find({ where: { name: 'Lucas' } });
    }

    static getById(id: number) {
        const studentRepository = getConnection().getRepository(Student);
        return studentRepository.findOne(id);
    }

    static findByEmailAndPassword(email: string, password: string) {
        const studentRepository = getConnection().getRepository(Student);
        return studentRepository.findOne({ where: { email, password } });
    }

    static create(student: Student) {
        const studentRepository = getConnection().getRepository(Student);
        return studentRepository.insert(student);
    }

    static remove(id: number) {
        const studentRepository = getConnection().getRepository(Student);
        return studentRepository.delete({ id: id });
    }

    static update(id: number, student: Student) {
        const studentRepository = getConnection().getRepository(Student);
        return studentRepository.update({ id: id }, student);
    }

}