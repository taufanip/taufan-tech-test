import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto, UpdateEmployeeDTO } from "./dtos/create.employee.dto";

@Controller("employee")
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
    
    @Post()
    create(@Body() dto: CreateEmployeeDto){
        return this.employeeService.create(dto);
    } 

    @Get()
    GetAll(){
        return this.employeeService.getAll();
    }  

    @Get(':id')
    GetDataById(@Param('id') id: number){
        return this.employeeService.getDataById(id);
    }  
    
    @Patch(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: UpdateEmployeeDTO,
    ){
        return this.employeeService.update(id, dto);
    }

    @Delete(':id')
    async delete(
        @Param('id') id: number){
        return this.employeeService.delete(id);
    } 
}