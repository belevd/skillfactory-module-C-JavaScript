const person = {
    city: 'Moscow',
}

let student = Object.create(person);

student.ownCity = "Piter";

for (let key in student) {
    console.log(key)
}