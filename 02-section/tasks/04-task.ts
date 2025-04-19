enum CarBrand {
    Mercedes = 'mercedes',
    BMW = 'bmw',
    Tesla = 'tesla',
}

let cars: CarBrand | null = null;

// Используя Enum укажите переменной cars
// такой тип, при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку

// cars = "nissan"; // Ошибка TS: Type '"nissan"' is not assignable to type 'CarBrand | null'

export { };