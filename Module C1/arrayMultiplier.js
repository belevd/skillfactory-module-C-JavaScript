function arrayMultiply(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    console.log(result);
}

arrayMultiply([1, 2, 3, 4, 5, 6]);