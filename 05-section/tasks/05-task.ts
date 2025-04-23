interface IPlaceData {
  country?: string;
  city?: string;
  address?: string;
  temperature?: number;
  time?: Date | number | string;
  isCloudy?: boolean;
}

// Выше описан интерфейс некого места. Все
// свойства этого места не обязательны.
// Используя интерфейс IPlaceData создайте
// тип PlaceAddressType, в котором будут
// поля country, city, address. При этом
// поля должны быть обязательны к заполнению.

type PlaceAddressType = Required<Pick<IPlaceData, 'country' | 'city' | 'address'>> & Omit<IPlaceData, 'country' | 'city' | 'address'>;

const place: PlaceAddressType = {
  country: "Russia",
  city: "St. Petersburg",
  address: "Nekrasova Street, 1",
  temperature: 22,
  time: new Date(),
  isCloudy: false
};

console.log(place);

export { };