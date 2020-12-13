let input;
let total = 0;

while (input !== null) {
    input = prompt("Please, enter a number");

    if (input !== null) {
        let number = Number(input);

        if (Number.isNaN(number)) {
            alert("Entered not a number, please try again");
        }

        else {
            total += number;
        }
    }
}

alert(`Total sum of numbers equal ${total}`);
console.log(`Total sum of numbers equal ${total}`);