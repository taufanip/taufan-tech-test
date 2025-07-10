import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Employee } from "./employee.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEmployeeDto, UpdateEmployeeDTO } from "./dtos/create.employee.dto";

@Injectable()
export class EmployeeService{
    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>){

    }
    
    async create(dto: CreateEmployeeDto){
        const employee = this.employeeRepository.create(dto)
        return await this.employeeRepository.save(employee);
    }

    async getAll(){
        return await this.employeeRepository.find();
    }

    async getDataById(id: number){
        let dataExist = await this.employeeRepository.findOneBy({ id: id });
        
        if(!dataExist){
            throw new HttpException(
                'Data Not Found',
                HttpStatus.NOT_FOUND
            );
        }

        return dataExist;
    }

    async update(id: number, dto: UpdateEmployeeDTO){
        let dataExist = await this.employeeRepository.findOneBy({ id: id });

        if(!dataExist){
            throw new HttpException(
                'Data Not Found',
                HttpStatus.NOT_FOUND
            );
        }

        dataExist = { ...dataExist, ...dto, };
        return await this.employeeRepository.save(dataExist);
    }

    async delete(id:number){
        let dataExist = await this.employeeRepository.findOneBy({ id: id });

        if(!dataExist){
            throw new HttpException(
                'Data Not Found',
                HttpStatus.NOT_FOUND
            );
        } 

        await this.employeeRepository.delete(id);
        return "Data Employee dengan Id : " + dataExist.id + " telah dihapus!";
    }
}