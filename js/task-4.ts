let credits: number = 23580;
let pricePerDroid: number = 3000;
let totalPrice: number;
let input: number = Number(prompt("Сколько дроидов Вы хотите купить?"));

if (!input) {
  console.log("Отменено пользователем!");
} else {
  let droidsToBuy = input;
  console.log((totalPrice = pricePerDroid * droidsToBuy));

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${droidsToBuy} дроидов, на счету осталось ${credits} кредитов.`
    );
  }
}
