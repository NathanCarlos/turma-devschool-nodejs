import { Student } from "../models/students.model";
import { generateMessageObject } from "../utils/message.utils";

export class StudentsService {

    students: Array<Student> = [
        {
          id: 1,
          name: 'Nathan Carlos',
          email: 'nathan@gmail.com',
          password: '123456',
          monthlyPayment: 500,
          inclusionDate: '2021-07-24',
          lastMontlyPayment: '2021-07-24',
          validRegistration: true,
          course: 'Devschool MJV Angular'
        },
        {
          id: 2,
          name: 'Henrique Silva',
          email: 'henrique@gmail.com',
          password: '123456',
          monthlyPayment: 400,
          inclusionDate: '2021-01-24',
          lastMontlyPayment: '2021-06-24',
          validRegistration: true,
          course: 'Devschool MJV Angular'
        },
        {
          id: 3,
          name: 'Alan Jhonnes',
          email: 'alan@gmail.com',
          password: '123456',
          monthlyPayment: 450,
          inclusionDate: '2021-06-24',
          lastMontlyPayment: '2021-06-24',
          validRegistration: true,
          course: 'Devschool MJV Angular'
        }
    ];

    constructor() {}

    getStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        return this.students.find((student) => student.id === id);
    }

    createStudent(student: Student) {
        student.id = this.generateNextId();
        this.students.push(student);
        return student;
    }

    updateStudent(student: Student) {
      const studentIndex = this.students.findIndex((std) => std.id === Number(student.id));
      if(studentIndex === -1) {
        return undefined;
      }
      this.students[studentIndex] = student;
      return student;
    }

    deleteStudent(id: number) {
      const studentIndex = this.students.findIndex((student) => student.id === Number(id));
      if(studentIndex === -1) {
        return generateMessageObject("Estudante não existe!");
      }
      this.students.splice(studentIndex, 1);
      return generateMessageObject("Estudante excluído com sucesso!");
    }

    generateNextId() {
        const lastIndexStudents = this.students.length - 1;
        const id = this.students[lastIndexStudents].id + 1;
        return id;
    }
}
