interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    rating: number;
}

// IUser - модель данных юзера. IRatingUserItem 
// - модель данных юзера в рейтинге пользователей.
// Типы одноименных полей в обоих интерфейсах 
// совпадают. Укажите типы полей. 

interface IRatingUserItem {
    position: number;
    login: IUser['login'];
    rating: IUser['rating'];
}

let user: IRatingUserItem = {
    position: 13,
    login: 'alexkovalev',
    rating: 345,
}

console.log(user);

export { };
  