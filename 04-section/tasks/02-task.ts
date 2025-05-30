// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
    "cash",
    "card",
    "credit",
}

interface IUser {
    firstName: string;
    lastName: string;
    dateBirthday: Date;
}

interface IDeliveryInfo {
    deliveryCountry: string;
    deliveryCity: string;
    deliveryAddress: string;
    deliveryBuilding: number | string;
    deliveryApartment?: number;
    deliveryTime?: string;
}
  
interface ICustomer extends IUser, IDeliveryInfo {
    paymentType: paymentType;
    ordersCount: number;
    discountPercent: number;
    currency: "EUR" | "USD" | "RUB";
}

let customer: ICustomer = {
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
}

console.log(customer);

export { };