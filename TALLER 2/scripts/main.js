import { series } from './data.js';
var seriesTbody = document.getElementById("series");
var cardContainer = document.getElementById("series-card");
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td><a href=\"#\" style=\"color: #007bff; text-decoration: none;\">").concat(s.name, "</a></td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>");
        trElement.addEventListener("click", function () { return showSeriesDetail(s); });
        seriesTbody.appendChild(trElement);
    });
    var average = getAverageSeasons(series);
    var trAvg = document.createElement("tr");
    trAvg.classList.add("avg-row");
    trAvg.innerHTML = "\n    <td colspan=\"4\" style=\"text-align: left; font-weight: normal;\">\n      Seasons average: ".concat(Math.round(average), "\n    </td>");
    seriesTbody.appendChild(trAvg);
}
function getAverageSeasons(series) {
    var totalSeasons = series.reduce(function (total, s) { return total + s.seasons; }, 0);
    return totalSeasons / series.length;
}
function showSeriesDetail(serie) {
    var imageMap = {
        "Breaking Bad": "bb",
        "Orange Is the New Black": "ob",
        "Game of Thrones": "got",
        "The Big Bang Theory": "tbbt",
        "Sherlock": "sh",
        "A Very English Scandal": "aves"
    };
    var imageName = imageMap[serie.name] || "default";
    var imagePath = "./images/".concat(imageName, ".png");
    cardContainer.innerHTML = "\n    <div class=\"card shadow-sm\">\n      <img src=\"".concat(imagePath, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\" target=\"_blank\" style=\"color: #007bff; text-decoration: none;\">").concat(serie.link, "</a>\n      </div>\n    </div>\n  ");
}
//# sourceMappingURL=main.js.map