// Доработайте интерфейс таким образом
// Чтобы бренд и модель авто могли быть указаны лишь
// один раз. А и ovnerName было опциональным

interface ICar {
    readonly brand: string;
    readonly model: string;
    hp: number;
    registrationNumber: string;
    ownerName?: string;
};

const car: ICar = {
    brand: "Audi",
    model: "A6",
    hp: 600,
    registrationNumber: "А172АА777",
};

console.log(car);

export { };
  
