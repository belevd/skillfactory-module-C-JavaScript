let num1 = 245;
let num2 = 487;
let num3 = 1256;
let num4 = 0;
let num5 = 1;
let num6 = 17;

function checkPrime(number) {
    let result = true;
    if (number > 1000) {
        result = 'Введены неверные данные';
        return result;
    } else {
        if ((number == 1) || (number == 0)) {
            return result;
        } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                result = false;
                return result;
            }
        }}
    }
    return result;
}

console.log(checkPrime(num1));
console.log(checkPrime(num2));
console.log(checkPrime(num3));
console.log(checkPrime(num4));
console.log(checkPrime(num5));
console.log(checkPrime(num6));
