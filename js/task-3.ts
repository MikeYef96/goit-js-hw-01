const ADMIN_PASSWORD: string = "jqueryismyjam";
let message: string;

let input: string = "jqueryismyjam";

if (!input) {
  message = "Отменено пользователем!";
} else if (input === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

console.log(message);
