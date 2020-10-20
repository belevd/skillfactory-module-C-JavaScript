const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  const value1 = document.querySelector("#input1").value;
  const value2 = document.querySelector("#input2").value;
  if (compareValue(value1) && compareValue(value2)) {
    const url = "https://picsum.photos/" + value1 + "/" + value2;
    useRequest(url, displayResult);
  } else {
    result.innerHTML = "Одно из чисел вне диапазона от 100 до 300";
  }
});

function compareValue(value) {
  if ((value >= 100 && value <= 300) || value) {
    return true;
  }
}

function useRequest(urlRequest, callbackRequest) {
  fetch(urlRequest)
    .then((response) => { 
        console.log(response)
        return response.url; })
    .then((data) => {
      return callbackRequest(data);
    })
    .catch((error) => console.log(error))
}

function displayResult(apiData) {

  result.innerHTML = `<img src=${apiData} class="card-image">`;
}
