import { Type } from "class-transformer";
import { IsISO8601, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateEmployeeLeaveDto {

    @IsNotEmpty()
    employeeId: number;

    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(255)
    reason: string;

    @IsISO8601()
    @Type(() => Date)
    startDate: Date;

    @IsISO8601()
    @Type(() => Date)
    endDate: Date;
}

export class UpdateEmployeeLeaveDto {

    @IsNotEmpty()
    employeeId: number;

    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(255)
    reason: string;

    @IsISO8601()
    @Type(() => Date)
    startDate: Date;

    @IsISO8601()
    @Type(() => Date)
    endDate: Date;
}