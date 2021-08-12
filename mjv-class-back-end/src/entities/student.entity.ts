import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'students' })
export class Student {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'name', type: 'varchar', length: 255 })
    name?: string;

    @Column({ name: 'email', type: 'varchar', length: 255 })
    email?: string;

    @Column({ name: 'password', type: 'varchar', length: 255 })
    password?: string;

    @Column({ name: 'monthly_payment', type: 'decimal' })
    monthlyPayment?: number;

    @Column({ name: 'inclusion_date', type: 'date' })
    inclusionDate?: string | Date;

    @Column({ name: 'last_montlhy_payment', type: 'date' })
    lastMontlhyPayment?: string | Date;

    @Column({ name: 'valid_registration', type: 'bool' })
    validRegistration?: boolean;

    @Column({ name: 'course', type: 'varchar', length: 30 })
    course?: string;
}