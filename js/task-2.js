// const total = 100;
// const ordered = 50;

// if (ordered > total)
// {
//     console.log("На складе недостаточно товаров!");
// }

// else
// {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }

//ТЕРНАРНЫЙ ОПЕРАТОР
// const result = ordered > total ? "На складе недостаточно товаров!" : "Заказ оформлен, с вами свяжется менеджер";
// console.log(result);


//I PLAYED A BIT WITH THIS TASK)

const total = 100;
const ordered = prompt("Введите количество товаров для заказа");
const value = Number(ordered);

if (ordered === null)
{
    console.log("Отменено пользавателем");
}

else if(ordered >= total)
{
    console.log("На складе недостаточно товаров!");
}

else
{
    console.log("Заказ оформлен, с вами свяжется менеджер");
}