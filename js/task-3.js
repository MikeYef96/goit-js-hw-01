const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let input = prompt("Введите пароль");

if (!input)
{
    message = console.log("Отменено пользователем!");
}

else if(input === ADMIN_PASSWORD)
{
   message = console.log("Добро пожаловать!");
}

else
{
    message = console.log("Доступ запрещен, неверный пароль!");
}

alert(message);