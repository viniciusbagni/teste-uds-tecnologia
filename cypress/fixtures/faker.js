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

export function generateId() {
    return faker.random.number()
}

export function generateDescription() {
    return faker.lorem.lines(1)
}