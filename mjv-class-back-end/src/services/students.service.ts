import { Student } from "../entities/student.entity";
import { StudentRepository } from "../repository/student.repository";
import { createMessageObject } from "../utils/message.utils";

export class StudentsServices {

    students: Array<Student> = [];

    constructor() {

    }

    getStudents() {
        return StudentRepository.getAll();
    }

    getStudentById(id: number) {
        return StudentRepository.getById(id);
    }

    createStudent(student: Student) {
        return StudentRepository.create(student);
    }

    async removeStudent(id: number) {
        const student = await this.getStudentById(id);
        if(!student) {
            return createMessageObject("Estudante não encontrado!");
        }
        await StudentRepository.remove(id);
        return createMessageObject("Estudante excluído com sucesso!");
    }

    async updateStudent(id: number, student: Student) {
        const studentFinded = await this.getStudentById(id);
        if(!studentFinded) {
            return createMessageObject("Estudante não encontrado!");
        }
        await StudentRepository.update(id, student);
        return createMessageObject("Estudante atualizado com sucesso!");
    }

}