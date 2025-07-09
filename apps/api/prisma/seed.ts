import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
    const userAdmins = Array.from({length: 10}).map(()=>({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        gender: faker.person.gender()
    }));

    await prisma.userAdmin.createMany({
        data: userAdmins
    });

    const employees = Array.from({length: 30}).map(()=>({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: faker.lorem.sentences(),
        gender: faker.person.gender()
    }));

    await prisma.employee.createMany({
        data: employees
    });

    const employeeLeaves = Array.from({length: 50}).map(()=>({
        reason: faker.lorem.sentence(),
        startDate: faker.date.anytime(),
        endDate: faker.date.anytime(),
        employeeId: faker.number.int({min: 1, max: 30})
    }));

    employeeLeaves.map(async (employeeLeave)=> await prisma.employeeLeave.create({
        data: employeeLeave
    }))

    console.log('Seeding Completed')
}

main().then(()=>{
    prisma.$disconnect();
    process.exit(0);
}).catch(e=>{
    prisma.$disconnect();
    console.error(e);
    process.exit(1);
})



