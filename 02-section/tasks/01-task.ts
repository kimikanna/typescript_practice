// 1. Создайте 3 массива: массив из имен 3 ваших
// лучших друзей, массив из их возрастов, массив
// в котором будет указано есть ли у них автомобиль
// 2. Укажите в явной тип массивов
// 3. Заполните данные

const friends: string[] = ['Denis', 'Alex', 'John'];
const ages: number[] = [27, 31, 28];
const hasCar: boolean[] = [false, false, true];

// 4. Добавьте в каждый из массивов информацию
// о вашем четвертом друге

friends.push('Mark');
ages.push(29);
hasCar.push(true);

// 5. Раскомментируйте строки ниже исправьте их
// таким образом чтобы не возникало ошибок

friends.push('Vanya');
ages.push(22);
hasCar.push(true);

// 6. Создайте кортеж массивов, перенесите данные
// о ваши друзьях в него
const friendsData: [string, number, boolean][] = [];
for (let i = 0; i < friends.length; i++) {
    friendsData.push([friends[i], ages[i], hasCar[i]]);
}

console.log(friendsData);

export { };