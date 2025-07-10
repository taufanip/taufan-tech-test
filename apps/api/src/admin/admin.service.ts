import { Injectable } from "@nestjs/common";
import { Admin } from "./admin.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAdminDto } from "./dtos/create-admin.dto";
import { error } from "console";

@Injectable()
export class AdminService{
    constructor(@InjectRepository(Admin) private adminRepository: Repository<Admin>){

    }
    
    async create(dto: CreateAdminDto){
        const admin = this.adminRepository.create(dto)
        return await this.adminRepository.save(admin);
    }

    findMany(){
        return this.adminRepository.find();
    }

    async update(id: number, dto: CreateAdminDto){
        console.log("MASUK ERROR22")
        const updateData = await this.adminRepository.findOneBy({ id });

        // Object.assign(updateData, dto)
        
        //check that record exists

    }
}