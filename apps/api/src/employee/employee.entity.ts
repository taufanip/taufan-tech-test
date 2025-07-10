import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'employee'})
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    
    @Column()
    address: string;

    @Column()
    gender: string;

    @Column({ type: 'int', default: 12 })
    numberOfLeaves: number;

}