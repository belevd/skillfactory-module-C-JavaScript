function numbers(num1, num2) {
    let number = num1

    let timerId = setInterval(function() {
        console.log(number)
        if (number == num2) {
            clearInterval(timerId)
        }
        number++
    }, 1000)

}

numbers(1, 10)