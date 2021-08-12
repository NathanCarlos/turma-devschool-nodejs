import { Student } from "../models/student.model";
import { createMessageObject } from "../utils/message.utils";
import { StudentRepository } from "../repository/student.repository";

export class StudentsServices {

    constructor() {}

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

    async updateStudent(student: Student) {
        const studentFinded = await this.getStudentById(student.id);
        if(!studentFinded) {
            return createMessageObject("Estudante não encontrado!");
        }
        const studentUpdated = await StudentRepository.update(student);
        return studentUpdated;
    }

}