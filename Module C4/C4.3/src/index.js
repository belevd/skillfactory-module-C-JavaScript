// const div = document.getElementById('app');

// div.innerHTML = 'Hello, world!';
// div.setAttribute('title', 'example');
// div.style.color = 'red';
// div.style = 'font-size: 20px';

const content = 'Alloha'

// // создаем элемент
// const customDiv = document.createElement('div');

// // заполняем div
// customDiv.innerHTML = `<span id="custom">${content}</span>`;

// // ищем родительский узел и добавляем элемент
// const app = document.getElementById('app');

// document.body.insertBefore(customDiv, app);

document.getElementById('app').insertAdjacentHTML('beforebegin', `<span id="custom">${content}</span>`)

document.getElementById('app')