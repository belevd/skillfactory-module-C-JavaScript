const btn = document.querySelector(".btn_sender");
const btnGeo = document.querySelector(".btn_geo");
const wsUrl = "wss://echo.websocket.org/";
const chatHistory = document.querySelector(".chat_history");

let websocket;

function writeToScreen(message, sender) {
  let pre = document.createElement("p");
  pre.className = `${sender}-message`;
  pre.innerHTML = message;
  chatHistory.appendChild(pre);
}

if (!websocket) {
  websocket = new WebSocket(wsUrl);
}

btn.addEventListener("click", () => {
  websocket.onmessage = function (event) {
    writeToScreen(event.data, "server");
  };
  websocket.onerror = function (event) {
    writeToScreen(event.data, "server");
  };
});

btn.addEventListener("click", () => {
  const input = document.querySelector(".chat_input").value;
  writeToScreen(input, "client");
  websocket.send(input);
});

btnGeo.addEventListener("click", () => {
  if (!navigator.geolocation) {
    status.textContent = "Geolocation не поддерживается вашим браузером";
  } else {
    status.textContent = "Определение местоположения…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
});

const success = (position) => {
  console.log("position", position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const message = `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Ссылка на карту</a>`;
  writeToScreen(message, 'client')
};

const error = () => {
  status.textContent = "Невозможно получить ваше местоположение";
};
