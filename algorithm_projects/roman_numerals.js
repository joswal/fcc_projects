//array of roman numerals
let romanNum = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
];

// array of decimal numbers
let dNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function decimalRoman(value) {
    if (value <= 0 || value >= 4000) { //validation of passed arg value to check if within roman numeral range
        return `this ${value} is not valid,please enter correct value`;
    } else {
        var romanNumeral = ""; //initializing the roman numeral value to an empty string
        for (var i = 0; i < romanNum.length; i++) { //iterating trough the array of roman numerals 
            while (value >= dNum[i]) { //checks if the arg value is gte to decimal no in the index i of decimal no array
                value -= dNum[i]; //subtracts the decimal no in index i from the arg value
                romanNumeral += romanNum[i]; //concatenates the string in the index i of roman numeral array with the romanNumeral string
            }
        }
        return `the number is ${romanNumeral} in roman numerals `;
    }
}

console.log(decimalRoman(15));