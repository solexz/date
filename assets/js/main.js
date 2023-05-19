// new Date()
const date = new Date();
const container = document.querySelector("#container");
let textDate;
container.innerHTML = `${getDay()}, ${getDateAndYear()}, ${getSeconds()}`;

function getDay() {
  const day = date.getDay();
  return getDate(day);
}

function getDateAndYear() {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day} de ${getDateInMont(month)} de ${year}`;
}

function getSeconds() {
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return `${hour}:${min}:${sec}`;
}

function getDate(date) {
  let textDate;
  switch (date) {
    case 0:
      textDate = "Domingo";
      break;
    case 1:
      textDate = "Segunda";
      break;
    case 2:
      textDate = "Terça";
      break;
    case 3:
      textDate = "Quarta";
      break;
    case 4:
      textDate = "Quinta";
      break;
    case 5:
      textDate = "Sexta";
      break;
    case 6:
      textDate = "Sábado";
      break;
  }

  return textDate;
}

function getDateInMont(date) {
  let textDate;
  switch (date) {
    case 0:
      textDate = "Janeiro";
      break;
    case 1:
      textDate = "Fevereiro";
      break;
    case 2:
      textDate = "Março";
      break;
    case 3:
      textDate = "Abril";
      break;
    case 4:
      textDate = "Maio";
      break;
    case 5:
      textDate = "Junho";
      break;
    case 6:
      textDate = "Julho";
      break;
    case 7:
      textDate = "Agosto";
      break;
    case 8:
      textDate = "Setembro";
      break;
    case 9:
      textDate = "Outubro";
      break;
    case 10:
      textDate = "Novembro";
      break;
    case 11:
      textDate = "Dezembro";
      break;
  }

  return textDate;
}
