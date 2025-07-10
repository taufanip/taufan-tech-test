import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Admin } from "./admin.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAdminDto, UpdateAdminDTO } from "./dtos/create.admin.dto";

@Injectable()
export class AdminService{
    constructor(@InjectRepository(Admin) private adminRepository: Repository<Admin>){

    }
    
    async create(dto: CreateAdminDto){
        const admin = this.adminRepository.create(dto)
        return await this.adminRepository.save(admin);
    }

    async getAll(){
        return await this.adminRepository.find();
    }

    async update(id: number, dto: UpdateAdminDTO){
        let dataExist = await this.adminRepository.findOneBy({ id: id });

        if(!dataExist){
            throw new HttpException(
                'Data Not Found',
                HttpStatus.NOT_FOUND
            );
        }

        dataExist = { ...dataExist, ...dto, };
        return await this.adminRepository.save(dataExist);
    }

    async delete(id:number){
        let dataExist = await this.adminRepository.findOneBy({ id: id });

        if(!dataExist){
            throw new HttpException(
                'Data Not Found',
                HttpStatus.NOT_FOUND
            );
        } 

        await this.adminRepository.delete(id);
        return "Data Admin dengan Id : " + dataExist.id + " telah dihapus!";
    }
}