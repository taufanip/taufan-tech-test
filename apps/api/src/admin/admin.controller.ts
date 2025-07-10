import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dtos/create-admin.dto";

@Controller("admin")
export class AdminController {
    constructor(private readonly adminService: AdminService){}
    
    @Post()
    create(@Body() dto: CreateAdminDto){
        return this.adminService.create(dto);
    } 

    @Get()
    findMany(){
        return this.adminService.findMany();
    }  
    
    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: CreateAdminDto){
        return this.adminService.update(+id, dto);
    } 
}