import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { EmployeeLeaveService } from "./employeeLeave.service";
import { CreateEmployeeLeaveDto, UpdateEmployeeLeaveDto } from "./dtos/employeeLeave.dto";

@Controller("employee-leave")
export class EmployeeLeaveController {
    constructor(private readonly employeeLeaveService: EmployeeLeaveService){}
    
    @Post()
    create(@Body() dto: CreateEmployeeLeaveDto){
        return this.employeeLeaveService.create(dto);
    } 

    @Get()
    GetAll(){
        return this.employeeLeaveService.getAll();
    }  

    @Get(':id')
    GetDataById(@Param('id') id: number){
        return this.employeeLeaveService.getDataById(id);
    }

    @Get(':employeeId/all')
    GetDataByEmployeeId(@Param('employeeId') employeeId: number){
        return this.employeeLeaveService.getAllDataByEmployeeId(employeeId);
    } 
    
    @Patch(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: UpdateEmployeeLeaveDto,
    ){
        return this.employeeLeaveService.update(id, dto);
    }

    @Delete(':id')
    async delete(
        @Param('id') id: number){
        return this.employeeLeaveService.delete(id);
    } 
}