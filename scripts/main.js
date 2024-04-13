import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td> \n                            <td><a href=\"#\">").concat(serie.nombre, "</a></td>\n                            <td>").concat(serie.canal, "</td>\n                            <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var trPromedio = document.createElement("p");
    trPromedio.innerHTML = "Promedio de temporadas: ".concat(getPromedioTemporadas(series));
    seriesTbody.appendChild(trPromedio);
}
function getPromedioTemporadas(series) {
    var numTemporadasTotal = 0;
    series.forEach(function (serie) {
        numTemporadasTotal = numTemporadasTotal + serie.temporadas;
    });
    return numTemporadasTotal / series.length;
}
