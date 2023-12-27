f// Check if the input is a positive integer
    if (!Number.isInteger(number) || number <= 0) {
        throw new Error("Input must be a positive integer");
    }

    // Get the ones digit
    const onesDigit = number % 10;

    return onesDigit;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
