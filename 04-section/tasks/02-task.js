"use strict";
// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.
Object.defineProperty(exports, "__esModule", { value: true });
var paymentType;
(function (paymentType) {
    paymentType[paymentType["cash"] = 0] = "cash";
    paymentType[paymentType["card"] = 1] = "card";
    paymentType[paymentType["credit"] = 2] = "credit";
})(paymentType || (paymentType = {}));
var customer = {
    firstName: "Alex",
    lastName: "Kovalev",
    dateBirthday: new Date("1990-04-15"),
    deliveryCountry: "Russia",
    deliveryCity: "Moscow",
    deliveryAddress: "Tverskaya St",
    deliveryBuilding: "12B",
    deliveryApartment: 45,
    deliveryTime: "18:30",
    paymentType: paymentType.card,
    ordersCount: 10,
    discountPercent: 15,
    currency: "RUB",
};
console.log(customer);
