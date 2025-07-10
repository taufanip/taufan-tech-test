import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsString, Length, Matches, MaxDate, MaxLength, MinLength } from "class-validator";

export class CreateAdminDto {
    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    @MinLength(3)
    @MaxLength(255)
    fistname: string;

    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    @MinLength(3)
    @MaxLength(255)
    lastname: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date) 
    @MaxDate(() => new Date()) // Ensures the birthdate is not in the future (current date)
    birthdate: Date;

    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    gender: string;

    @IsString()
    @Length(8, 20, { message: 'Password must be between 8 and 20 characters long' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    })
    password: string;
}

export class UpdateAdminDTO {
    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    @MinLength(3)
    @MaxLength(255)
    fistname: string;

    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    @MinLength(3)
    @MaxLength(255)
    lastname: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date) 
    @MaxDate(() => new Date()) // Ensures the birthdate is not in the future (current date)
    birthdate: Date;

    @IsNotEmpty()
    @IsString({message: 'firstname must be a text'})
    gender: string;

    @IsString()
    @Length(8, 20, { message: 'Password must be between 8 and 20 characters long' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    })
    password: string;
}