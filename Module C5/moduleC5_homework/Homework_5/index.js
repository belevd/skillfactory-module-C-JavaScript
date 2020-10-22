const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  const value1 = document.querySelector("#input1").value;
  const value2 = document.querySelector("#input2").value;
  console.log(value1);
  console.log(value2);
  const validValue1 = compareValue(value1);
  const validValue2 = compareValue(value2);
  console.log(validValue1);
  console.log(validValue2);
  if (validValue1 && validValue2) {
    const url = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
    useRequest(url, displayResult);
  } else if (!validValue1 && validValue2) {
    result.innerHTML = "Номер страницы вне диапазона от 1 до 10";
  } else if (validValue1 && validValue2) {
    result.innerHTML = "Лимит вне диапазона от 1 до 10";
  } else {
    result.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  }
});

function compareValue(value) {
  if (1 <= value && value <= 10) {
    return true;
  } else {
    return false;
  }
}

function useRequest(urlRequest, callbackRequest) {
  fetch(urlRequest)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("myJSON", JSON.stringify(data));
      return callbackRequest(data);
    })
    .catch((error) => console.log(error));
}

function displayResult(apiData) {
  let cards = "";
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

  result.innerHTML = cards;
}

const myJSON = localStorage.getItem("myJSON");

if (myJSON) {
  let localData = JSON.parse(myJSON);
  console.log(localData);
  displayResult(localData);
}
