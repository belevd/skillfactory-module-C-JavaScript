function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };

  xhr.send();
}

// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector(".result-wrapper");
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector(".async-btn");

/**
 * Функция обработки полученного результата
 * apiData - объект с результатом запроса
 */
function displayResult(apiData) {
  let cards = "";
  // console.log('start cards', cards);

  apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
    cards = cards + cardBlock;
  });

  // console.log('end cards', cards);

  resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener("click", () => {
    const value = document.querySelector('input').value;
    if (0 <= value && value >= 10 || !value) {
        const resultNode = document.querySelector(".result-wrapper");
        resultNode.innerHTML = '<p>Число вне диапазона от 1 до 10</p>';
    } else {
        useRequest('https://picsum.photos/v2/list/?limit=' + value, displayResult);
    }
});
