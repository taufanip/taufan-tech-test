import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "./employee.entity";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";

@Module({
    imports: [TypeOrmModule.forFeature([Employee])],
    controllers: [EmployeeController],
    providers: [EmployeeService]

})

export class EmployeeModule{

}