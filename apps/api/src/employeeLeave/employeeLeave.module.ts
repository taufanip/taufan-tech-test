import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeLeave } from "./employeeLeave.entity";
import { EmployeeLeaveController } from "./employeeLeave.controller";
import { EmployeeLeaveService } from "./employeeLeave.service";
import { Employee } from "src/employee/employee.entity";

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeLeave, Employee])],
    controllers: [EmployeeLeaveController],
    providers: [EmployeeLeaveService]

})

export class EmployeeLeaveModule{

}