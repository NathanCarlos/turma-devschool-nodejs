import { getConnection } from "typeorm";
import { Student } from "../entities/student";

export class StudentRepository {
    static getAll() {
        return getConnection()
        .getRepository(Student)
        .find();
    }

    static getById(id: number) {
        return getConnection()
        .getRepository(Student)
        .findOne({ where: { id } })
    }

    static create(student: Partial<Student>) {
        return getConnection()
        .getRepository(Student)
        .insert(student);
    }

    static update(student: Partial<Student>) {
        return getConnection()
        .getRepository(Student)
        .update({ id: student.id }, student);
    }

    static remove(id: number) {
        return getConnection()
        .getRepository(Student)
        .delete({ id });
    }
}