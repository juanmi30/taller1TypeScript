import { series } from "./data.js";
import { Serie } from "./serie.js";

let seriesTbody: HTMLElement = document.getElementById("series")!;

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
  console.log("Desplegando series");
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td> 
                            <td><a href="#">${serie.nombre}</a></td>
                            <td>${serie.canal}</td>
                            <td>${serie.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
  let trPromedio = document.createElement("p");
  trPromedio.innerHTML = `Promedio de temporadas: ${getPromedioTemporadas(
    series
  )}`;
  seriesTbody.appendChild(trPromedio);
}

function getPromedioTemporadas(series: Serie[]): number {
  let numTemporadasTotal: number = 0;
  series.forEach((serie) => {
    numTemporadasTotal = numTemporadasTotal + serie.temporadas;
  });
  return numTemporadasTotal / series.length;
}
