let myMap = new Map([
    ['name', 'Vasya'],
    ['age', 35],
    [123, 52]
]);

for (let name of myMap.keys()) {
    console.log(`Значение ключа ${name} = ${myMap.get(name)}`)
};