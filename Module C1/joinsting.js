let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function arrayToString(arr) {
    return "-" + arr.join("-") + "-";
}

console.log(arrayToString(numbersArray));