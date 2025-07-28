import faker from 'faker-br'

export function generateFirstName() {
    return faker.name.firstName() 
}

export function generateLastName() {
    return faker.name.lastName()
}

export function generateCep() {
    return faker.address.zipCode()
}