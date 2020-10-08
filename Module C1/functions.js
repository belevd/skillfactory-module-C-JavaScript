let array = [3, 5, 7, 12];

// function addNumber(array, number) {
//     let resultArr = [];
//     resultArr = array.map(function(value, index) {
//         return value + number;
//     });
//     console.log(resultArr);
// }

function addNumber(array, number) {
    let resultArr = array.map(value => value + number);
    console.log(resultArr);
}

addNumber(array, 2);