function Candy(name) {
    this.tasty = 'delisious',
    this.name = name
}

Candy.prototype.getWeight = function(weight) {
    console.log(`Weight is ${weight} g`)
}

function ChocoCandy(name, choco) {
    this.name = name,
    this.choco = choco
}

ChocoCandy.prototype = new Candy()

ChocoCandy.prototype.getWeight = function(weight) {
    console.log(`Candy weight is ${weight} g`)
}

const twix = new ChocoCandy('Twix', 'milky');
const snikers = new Candy('Snikers');

twix.getWeight(47);
snikers.getWeight(50);

console.log(twix)
console.log(snikers)