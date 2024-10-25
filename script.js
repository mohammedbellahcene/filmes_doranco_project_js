const containerFilms = document.querySelector(".container");
const btnPoular = document.querySelector(".popular");
const btnrated = document.querySelector(".rated");
const btnupcoming = document.querySelector(".upcoming");
const titrePrincipal = document.querySelector("h1");
const modale = document.querySelector(".modal");
const carteModal = document.querySelector(".modal");
const clos = document.querySelector(".close");
//let results;
let tabCards = [];

// Récupération de la clé de l'api et un authorization
const optionsAll = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2VmZjRlMWM5YTY2NDg5OTY1YTRlYmYwMjcwZjIwYyIsIm5iZiI6MTcyOTY3MTQzNy4yMzY0NjQsInN1YiI6IjVkZGQ0NzIwZThkMGI0MDAxMWY5ZDcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TCs8tVp3adgjNEPRnFjxgmAdDe0c4KOH43KeS0FHL5w",
  },
};
// le préfix commun utilisé dans chemin de l'image de chaque poster de film
const preposter = "https://media.themoviedb.org/t/p/w220_and_h330_face";

// récuperation des données et faire le render
async function getData(type) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?language=fr-FR&page=1`,
    optionsAll
  );
  const { results } = await response.json();
  console.log(results);
  titrePrincipal.innerHTML = `List of ${
    type == "top_rated" ? "top rated" : type
  } films page 1.`;

  results.map((film, index) => {
    let cardhtml = `
        <article class="cardfilm" id="${index}">
                
                 <img src="${preposter}${film.poster_path}" alt="">
                
                <div class="description">
                    <h2>${film.original_title}</h2>
                    <p>${film.overview}</p>
                </div>
       
      </article>`;

    containerFilms.insertAdjacentHTML("beforeend", cardhtml);

    let carte = document.getElementById(`${index}`);

    carte.addEventListener("click", () => {
      // modale.style.opacity = 0.9;
      modale.style.display = "block";
      modale.style.zIndex = 1000;
      modale.innerHTML = `<div class="close">X</div>${cardhtml}`;
    });

    tabCards.push(carte);
  });
}
function btnClick(type) {
  containerFilms.innerHTML = "";
  getData(type);
}
btnPoular.addEventListener("click", () => {
  btnClick("popular");
});
btnrated.addEventListener("click", () => {
  btnClick("top_rated");
});
btnupcoming.addEventListener("click", () => {
  btnClick("upcoming");
});

modale.addEventListener("click", (e) => {
  //e.target.style.opacity = 0;
  modale.style.display = "none";
  e.target.style.zIndex = -1;
});
