function summ1(num1) {
    return function(num2) {
        return num1 + num2
    }
}


let summ = summ1(5);

console.log(summ(2))