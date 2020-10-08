let array1 = [1, 3, 4, 5, 6, NaN, undefined, null, 0, 0, 'hello', 'hi'];
let array2 = [1, 2, 4, 6, NaN, 0, 'hello', 'hi'];

function getEvenAndOdd (arr) {
    let even = 0,
        odd = 0,
        zero = 0;
    for (element of arr) {
        if ((typeof(element) == 'number') && (!isNaN(element))) {
            if (element == 0) {
                zero += 1;
            } else if (element % 2 == 0) {
                even += 1;
            } else {
                odd += 1;
            };
        };
    };
    console.log(`В заданном массиве ${even} четных элементов, ${odd} нечетных элементов и ${zero} нулей.`)
}

getEvenAndOdd(array1);
getEvenAndOdd(array2);