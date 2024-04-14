import { series } from "./data.js";
import { Serie } from "./serie.js";

let seriesTbody: HTMLElement = document.getElementById("series")!;
let card: HTMLElement = document.getElementById("card")!;
let cardBody: HTMLElement = document.getElementById("card-body")!;

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  console.log("Desplegando series");
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td> 
                            <td><a href="#" id="${serie.id}" class="serie-link">${serie.nombre}</a></td>
                            <td>${serie.canal}</td>
                            <td>${serie.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
  let trPromedio = document.createElement("p");
  trPromedio.innerHTML = `Promedio de temporadas: ${getPromedioTemporadas(
    series
  )}`;
  seriesTbody.appendChild(trPromedio);

  const serieLinks = document.querySelectorAll(".serie-link");
  serieLinks.forEach((link) => {
    link.addEventListener("click", (Event) => {
      Event.preventDefault();
      const serieId: string = link.getAttribute("id")!;
      let serieActual: Serie = series[+serieId - 1];
      console.log(serieActual);
      renderCard(serieActual);
    });
  });
}

function getPromedioTemporadas(series: Serie[]): number {
  let numTemporadasTotal: number = 0;
  series.forEach((serie) => {
    numTemporadasTotal = numTemporadasTotal + serie.temporadas;
  });
  return numTemporadasTotal / series.length;
}

function renderCard(serie: Serie) {
  console.log("Desplegando card");
  card.style.display = "flex";
  card.innerHTML = `<img class="card-img-top" src="${serie.urlImagen}" alt="${serie.nombre}">`;

  let h1Element = document.createElement("h1");
  h1Element.classList.add("card-title");
  h1Element.innerText = serie.nombre;

  let descripcion = document.createElement("p");
  descripcion.classList.add("card-text");
  descripcion.innerText = serie.descripcion;

  let linkInfo = document.createElement("a");
  linkInfo.classList.add("card-text");
  linkInfo.innerText = serie.webOficial;
  linkInfo.setAttribute("href", serie.webOficial);
  linkInfo.setAttribute("target", "_blank");

  cardBody.innerHTML = "";
  cardBody.appendChild(h1Element);
  cardBody.appendChild(descripcion);
  cardBody.appendChild(linkInfo);
  card.appendChild(cardBody);
}
