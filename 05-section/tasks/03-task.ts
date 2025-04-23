interface IShop {
  id: number;
  name: string;
  employeesCount: number;
  ceo: string;
  address: string;
  isOpen: boolean;
}

// В данном файле описаны 2 типа IShop - модель
// данных магазина и IShopListItem - данные
// магазина использующиеся в списке магазинов.
// Перепишите IShopListItem создав еще 2 типа:
// IShopListItem1 - используя утилиту которая
// удаляет указанные свойства и IShopListItem2
// - используя утилиту, которая удаляет все
// свойства, кроме указанных.

type IShopListItem1 = Omit<IShop, 'employeesCount' | 'ceo' | 'isOpen'>;

// IShopListItem2: оставляем только указанные свойства
type IShopListItem2 = Pick<IShop, 'id' | 'name' | 'address'>;

// Пример использования
const shop1: IShopListItem1 = {
  id: 1,
  name: 'Shop 1',
  address: 'Street 1',
};

const shop2: IShopListItem2 = {
  id: 2,
  name: 'Shop 2',
  address: 'Street 2',
};

console.log(shop1);
console.log(shop2);

export { };