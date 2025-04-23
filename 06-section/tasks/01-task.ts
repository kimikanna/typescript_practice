type PaymentInfo = {
  id: string;
  amount: number;
  currency: string;
};

// 1. Выше описан тип PaymentInfo. Создайте новый
// тип GenericPaymentInfo который будет способен
// принимать любой тип для свойства currency.
// 2. Доработайте GenericPaymentInfo таким образом
// чтобы поумолчанию тип currency был string.

type GenericPaymentInfo<T = string> = {
  id: string;
  amount: number;
  currency: T;
};

const payment1: GenericPaymentInfo = {
  id: "101",
  amount: 202,
  currency: "RUB"
};

const payment2: GenericPaymentInfo<number> = {
  id: "303",
  amount: 404,
  currency: 5
};

console.log(payment1);
console.log(payment2);

export { };
