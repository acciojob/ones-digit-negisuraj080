function onesDigit(n) {
  // your code here
	// Check if the input is a positive integer
    if (!Number.isInteger(number) || number <= 0) {
        throw new Error("Input must be a positive integer");
    }

    // Convert the number to a string to handle leading zeros
    const numberString = number.toString();

    // Get the ones digit
    const onesDigit = parseInt(numberString.charAt(numberString.length - 1));

    return onesDigit;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
