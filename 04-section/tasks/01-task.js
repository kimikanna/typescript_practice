"use strict";
// 1. Ниже приведен список переменных из
// первого урока. На их основе создайте
// интерфейс IUser.
Object.defineProperty(exports, "__esModule", { value: true });
var firstName;
var lastName;
var sex;
var age;
var hometown;
var isMarried;
var hasPets;
var customer = {
    firstName: 'Alex',
    lastName: 'Nemelov',
    sex: 'Male',
    age: 25,
    hometown: 'Toronto',
    isMarried: true,
    hasPets: false,
    ordersCount: 16,
    paymentType: 'card',
};
console.log(customer);
