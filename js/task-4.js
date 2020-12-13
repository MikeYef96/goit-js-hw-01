let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let input = prompt("Сколько дроидов Вы хотите купить?");

if (input === null) {
    console.log("Отменено пользователем!");
}

else {
    let droidsToBuy = Number(input);
    console.log(totalPrice = pricePerDroid * droidsToBuy);
    
    if (totalPrice > credits) {
        console.log("Недостаточно средств на счету!");
    } else {
        credits -= totalPrice;
        console.log(`Вы купили ${droidsToBuy} дроидов, на счету осталось ${credits} кредитов.`);
    }
}


