
const containerFilms=document.querySelector(".container")

const optionsAll = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2VmZjRlMWM5YTY2NDg5OTY1YTRlYmYwMjcwZjIwYyIsIm5iZiI6MTcyOTY3MTQzNy4yMzY0NjQsInN1YiI6IjVkZGQ0NzIwZThkMGI0MDAxMWY5ZDcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TCs8tVp3adgjNEPRnFjxgmAdDe0c4KOH43KeS0FHL5w",
    },
  };

  
async function getData(){
    const response= await  fetch("https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1",optionsAll);
    const {results}= await response.json();
    console.log(results)
    containerFilms.innerHTML=results.map (film=>`
        <article class="cardfilm">
                
                    <img src="https://media.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}" alt="">
                
                <div class="description">
                    <h2>${film.original_title}</h2>
                    <p>${film.overview}</p>
                </div>
       
      </article>`).join("");    
}
getData();


