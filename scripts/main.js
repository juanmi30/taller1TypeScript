import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
var card = document.getElementById("card");
var cardBody = document.getElementById("card-body");
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td> \n                            <td><a href=\"#\" id=\"").concat(serie.id, "\" class=\"serie-link\">").concat(serie.nombre, "</a></td>\n                            <td>").concat(serie.canal, "</td>\n                            <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var trPromedio = document.createElement("p");
    trPromedio.innerHTML = "Promedio de temporadas: ".concat(getPromedioTemporadas(series));
    seriesTbody.appendChild(trPromedio);
    var serieLinks = document.querySelectorAll(".serie-link");
    serieLinks.forEach(function (link) {
        link.addEventListener("click", function (Event) {
            Event.preventDefault();
            var serieId = link.getAttribute("id");
            var serieActual = series[+serieId - 1];
            console.log(serieActual);
            renderCard(serieActual);
        });
    });
}
function getPromedioTemporadas(series) {
    var numTemporadasTotal = 0;
    series.forEach(function (serie) {
        numTemporadasTotal = numTemporadasTotal + serie.temporadas;
    });
    return numTemporadasTotal / series.length;
}
function renderCard(serie) {
    console.log("Desplegando card");
    card.style.display = "flex";
    card.innerHTML = "<img class=\"card-img-top\" src=\"".concat(serie.urlImagen, "\" alt=\"").concat(serie.nombre, "\">");
    var h1Element = document.createElement("h1");
    h1Element.classList.add("card-title");
    h1Element.innerText = serie.nombre;
    var descripcion = document.createElement("p");
    descripcion.classList.add("card-text");
    descripcion.innerText = serie.descripcion;
    var linkInfo = document.createElement("a");
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
