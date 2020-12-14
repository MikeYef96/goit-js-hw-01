let input;
let total = 0;

while (input !== null) {
    input = prompt("Please, enter a number");

    if (input !== null) {
        let num = Number(input);

        if (!+num) {
            alert("Entered not a number, please try again");
        }

        else {
            total += num;
        }
    }
}

alert(`Total sum of numbers equal ${total}`);