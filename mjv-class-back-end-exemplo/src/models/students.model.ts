export interface Student {
    id: number;
    name: string;
    email: string;
    password: string;
    monthlyPayment: number;
    inclusionDate: string | Date;
    lastMontlyPayment: string | Date;
    validRegistration: boolean;
    course: string;
}