let input;
let total = 0;

while (input !== null) {
    input = prompt("Please, enter a number");

    if (input !== null) {
        input = Number(input);

        if (!+input) {
            alert("Entered not a number, please try again");
        }

        else {
            total += input;
        }
    }
}

alert(`Total sum of numbers equal ${total}`);