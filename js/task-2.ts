const totalItems: number = 100;
const ordered: number = 50;

// if (ordered > total)
// {
//     console.log("На складе недостаточно товаров!");
// }

// else
// {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }

const result =
  ordered > totalItems
    ? "На складе недостаточно товаров!"
    : "Заказ оформлен, с вами свяжется менеджер";
console.log(result);

//I PLAYED A BIT WITH THIS TASK)

// const totalItems:number = 100;
// const ordered: number = parseInt(
//   prompt("Введите количество товаров для заказа")
// );

// if (ordered === null)
// {
//     console.log("Отменено пользавателем");
// }

// else if(ordered >= totalItems)
// {
//     console.log("На складе недостаточно товаров!");
// }

// else
// {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }
