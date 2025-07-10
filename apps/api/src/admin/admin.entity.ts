import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'admin'})
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    birthdate: string;

    @Column()
    gender: string;

    @Column()
    password: string;

}