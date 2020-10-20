const parser = new DOMParser();

const xmlString = `
<list>
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
let result = {}


const listNode = xmlDOM.querySelector('list');
result.list = [];
const studentNode = listNode.querySelectorAll('student');
for (student of studentNode) {
    const nameNode = student.querySelector('name');
    const langAttr = nameNode.getAttribute('lang');
    const firstNode = nameNode.querySelector('first');
    const secondNode = nameNode.querySelector('second');
    const ageNode = student.querySelector('age');
    const profNode = student.querySelector('prof');
    result.list.push({
        name: firstNode.textContent + " " + secondNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr
    })
}

console.log(result)