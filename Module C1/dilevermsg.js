let mailBoxes = ["", "", "", "", "", ""];

function deliverMessage(boxNum, message) {
    if (mailBoxes[boxNum] != undefined) {
        mailBoxes[boxNum] = message;
    }
}

console.log(mailBoxes)
deliverMessage(1, 'Good morning!')
console.log(mailBoxes)
deliverMessage(1, 'Hello!')
console.log(mailBoxes)