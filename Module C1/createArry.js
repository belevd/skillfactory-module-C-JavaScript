function createArray() {
    let result = [];
    while(true) {
        let element = prompt("Введите значение элемента массива: ");
        if (element == "стоп") {
            break;
        } else {
            result.push(element);
        }
    }
    console.log(result);
}

createArray();