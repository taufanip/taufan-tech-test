import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto, UpdateAdminDTO } from "./dtos/create.admin.dto";

@Controller("admin")
export class AdminController {
    constructor(private readonly adminService: AdminService){}
    
    @Post()
    create(@Body() dto: CreateAdminDto){
        return this.adminService.create(dto);
    } 

    @Get()
    GetAll(){
        return this.adminService.getAll();
    }  
    
    @Patch(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: UpdateAdminDTO,
    ){
        return this.adminService.update(id, dto);
    }

    @Delete(':id')
    async delete(
        @Param('id') id: number){
        return this.adminService.delete(id);
    } 
}