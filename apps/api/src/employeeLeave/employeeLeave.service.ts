import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { EmployeeLeave } from "./employeeLeave.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateEmployeeLeaveDto, UpdateEmployeeLeaveDto } from "./dtos/employeeLeave.dto";
import { Employee } from "src/employee/employee.entity";

@Injectable()
export class EmployeeLeaveService{
    constructor(
        @InjectRepository(EmployeeLeave) private employeeLeaveRepository: Repository<EmployeeLeave>,
        @InjectRepository(Employee) private employeeRepository: Repository<Employee>
    ){}

    

    async create(dto: CreateEmployeeLeaveDto){
        let checkEmployee = await this.employeeRepository.findOneBy({id: dto.employeeId });

        if(!checkEmployee){
            throw new HttpException(
                'Data Employee Not Found',
                HttpStatus.NOT_FOUND
            );
        }

        if(checkEmployee.numberOfLeaves == 0){
             throw new HttpException(
                'Insufficient Number of Leaves',
                HttpStatus.FORBIDDEN
            );
        }

        const employeeLeave = this.employeeLeaveRepository.create(dto);
        
        return await this.employeeLeaveRepository.save(employeeLeave);
    }

    async getAll(){
        return await this.employeeLeaveRepository.find();
    }

    async getDataById(id: number){
        let dataExist = await this.employeeLeaveRepository.findOneBy({ id: id });
        
        if(!dataExist){
            throw new HttpException(
                'Data Not Found',
                HttpStatus.NOT_FOUND
            );
        }

        return dataExist;
    }

    async getAllDataByEmployeeId(employeeId: number): Promise<EmployeeLeave[]>{
        return this.employeeLeaveRepository.find({where: {employeeId: employeeId}});
    }

    async update(id: number, dto: UpdateEmployeeLeaveDto){
        let dataExist = await this.employeeLeaveRepository.findOneBy({ id: id });

        if(!dataExist){
            throw new HttpException(
                'Data Not Found',
                HttpStatus.NOT_FOUND
            );
        }

        dataExist = { ...dataExist, ...dto, };
        return await this.employeeLeaveRepository.save(dataExist);
    }

    async delete(id:number){
        let dataExist = await this.employeeLeaveRepository.findOneBy({ id: id });

        if(!dataExist){
            throw new HttpException(
                'Data Not Found',
                HttpStatus.NOT_FOUND
            );
        } 

        await this.employeeLeaveRepository.delete(id);
        return "Data Employee dengan Id : " + dataExist.id + " telah dihapus!";
    }
}