
const containerFilms=document.querySelector(".container");
const btnPoular=document.querySelector(".popular");
const btnrated=document.querySelector(".rated");
const btnupcoming=document.querySelector(".upcoming");
const titrePrincipal=document.querySelector("h1");


const optionsAll = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2VmZjRlMWM5YTY2NDg5OTY1YTRlYmYwMjcwZjIwYyIsIm5iZiI6MTcyOTY3MTQzNy4yMzY0NjQsInN1YiI6IjVkZGQ0NzIwZThkMGI0MDAxMWY5ZDcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TCs8tVp3adgjNEPRnFjxgmAdDe0c4KOH43KeS0FHL5w",
    },
  };

const preposter= "https://media.themoviedb.org/t/p/w220_and_h330_face"

async function getData(type){
    const response= await  fetch(`https://api.themoviedb.org/3/movie/${type}?language=fr-FR&page=1`,optionsAll);
    const {results}= await response.json();
    console.log(results)
    titrePrincipal.innerHTML=`List of ${type=="top_rated"? "top rated":type } films page 1.`
    //containerFilms.insertAdjacentHTML("beforebegin",h1)
    let contenu="";
    containerFilms.innerHTML=results.map ((film,index)=>`
        <article class="cardfilm">
                
                 <img src="${preposter}${film.poster_path}" alt="">
                
                <div class="description">
                    <h2>${film.original_title}</h2>
                    <p>${film.overview}</p>
                </div>
       
      </article>`).join(""); 
       
}
btnPoular.addEventListener("click",()=>getData("popular"));
btnrated.addEventListener("click",()=>getData("top_rated"));
btnupcoming.addEventListener("click",()=>getData("upcoming"));
//getData("popular");


