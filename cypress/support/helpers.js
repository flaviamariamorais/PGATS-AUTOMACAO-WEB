import { faker } from '@faker-js/faker';


export function getRandomName() {
    return faker.person.firstName();
}

export function getRandomEmail() {
    return `qa-tester-${getRandomNumber()}@example.com`;
}   

export function getTimeStamp() {
  return Date.now();
}

export function getRandomNumber() {
    return Math.floor(Math.random() * 100000);
}

