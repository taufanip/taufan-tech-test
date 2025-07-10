import { IsEmail, IsMobilePhone, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    @MinLength(3)
    @MaxLength(255)
    fistname: string;

    @IsNotEmpty()
    @IsString({message: 'lastname must be a text'})
    @MinLength(3)
    @MaxLength(255)
    lastname: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsMobilePhone('id-ID')
    phoneNumber: string;

    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(255)
    address: string;

    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    gender: string;
}

export class UpdateEmployeeDTO {
    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    @MinLength(3)
    @MaxLength(255)
    fistname: string;

    @IsNotEmpty()
    @IsString({message: 'lastname must be a text'})
    @MinLength(3)
    @MaxLength(255)
    lastname: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsMobilePhone('id-ID')
    phoneNumber: string;

    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(255)
    address: string;

    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    gender: string;
}