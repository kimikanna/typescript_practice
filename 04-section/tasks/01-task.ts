// 1. Ниже приведен список переменных из
// первого урока. На их основе создайте
// интерфейс IUser.

let firstName;
let lastName;
let sex;
let age;
let hometown;
let isMarried;
let hasPets;

interface IUser {
    firstName: string;
    lastName: string;
    sex: string;
    age: number;
    hometown: string;
    isMarried: boolean;
    hasPets: boolean;
    hasCar?: boolean;
}

// 2. Не меняя написанный вами интерфейс
// IUser, добавьте в него опциональную
// переменную hasCar

// 3. Создайте новый интерфейс ICustomer,
// поля которого будут наследоваться от IUser.
// ICustomer также должен содержать поля с
// количеством заказов, а также со способом оплаты
// (cash, card или credit)

type PaymentType = 'cash' | 'card' | 'credit';

interface ICustomer extends IUser {
    ordersCount: number;
    paymentType: PaymentType;
}

let customer: ICustomer = {
    firstName: 'Alex',
    lastName: 'Nemelov',
    sex: 'Male',
    age: 25,
    hometown: 'Toronto',
    isMarried: true,
    hasPets: false,
    ordersCount: 16,
    paymentType: 'card',
}

console.log(customer);

export { };