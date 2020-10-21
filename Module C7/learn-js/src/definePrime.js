export function checkPrime(number) {
    let result;
    if (number < 0 || number > 1000) {
        result = 'Введены неверные данные';
        return result;
    } else {
        if ((number == 1) || (number == 0)) {
            result = `Число ${number} простое`;
            return result;
        } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                result = `Число ${number} составное`;
                return result;
            }
        }}
    }
    result = `Число ${number} простое`;
    return result;
}