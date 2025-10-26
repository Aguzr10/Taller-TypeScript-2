import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById("series")!;
const cardContainer: HTMLElement = document.getElementById("series-card")!;

renderSeriesInTable(series);

function renderSeriesInTable(series: any[]): void {
  series.forEach(s => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${s.id}</td>
      <td><a href="#" style="color: #007bff; text-decoration: none;">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>`;
    
    trElement.addEventListener("click", () => showSeriesDetail(s));
    seriesTbody.appendChild(trElement);
  });

  const average = getAverageSeasons(series);
  const trAvg = document.createElement("tr");
  trAvg.classList.add("avg-row");
  trAvg.innerHTML = `
    <td colspan="4" style="text-align: left; font-weight: normal;">
      Seasons average: ${Math.round(average)}
    </td>`;
  seriesTbody.appendChild(trAvg);
}

function getAverageSeasons(series: any[]): number {
  const totalSeasons = series.reduce((total, s) => total + s.seasons, 0);
  return totalSeasons / series.length;
}

function showSeriesDetail(serie: any): void {
  const imageMap: Record<string, string> = {
    "Breaking Bad": "bb",
    "Orange Is the New Black": "ob",
    "Game of Thrones": "got",
    "The Big Bang Theory": "tbbt",
    "Sherlock": "sh",
    "A Very English Scandal": "aves"
  };

  const imageName = imageMap[serie.name] || "default";
  const imagePath = `./images/${imageName}.png`;

  cardContainer.innerHTML = `
    <div class="card shadow-sm">
      <img src="${imagePath}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank" style="color: #007bff; text-decoration: none;">${serie.link}</a>
      </div>
    </div>
  `;
}
