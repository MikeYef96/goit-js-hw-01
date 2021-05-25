interface Item {
  name: string;
  price: number;
}

const item: Item = {
  name: "Генератор защитного поля",
  price: 1000,
};

console.log(`Выбран ${item.name}, цена за штуку ${item.price} кредитов`);

item.price = 2000;

console.log(`Выбран ${item.name}, цена за штуку ${item.price} кредитов`);
