
const containerFilms=document.querySelector(".container");
const btnPoular=document.querySelector(".popular");
const btnrated=document.querySelector(".rated");
const btnupcoming=document.querySelector(".upcoming");
const titrePrincipal=document.querySelector("h1");
let tabCards=[];


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
    
   results.map ((film,index)=>{
    
    let cardhtml= `
        <article class="cardfilm">
                
                 <img src="${preposter}${film.poster_path}" alt="">
                
                <div class="description">
                    <h2>${film.original_title}</h2>
                    <p>${film.overview}</p>
                </div>
       
      </article>`;
      
      containerFilms.insertAdjacentHTML("beforeend",cardhtml);
      let carte=document.querySelector(".cardfilm")
      carte.setAttribute("id",`${index}`)
      tabCards.push(document.getElementById(`${index}`))
     tabCards[index].addEventListener("click",()=> console.log(film.original_title))
     
    
   
      
}); 
       
}
btnPoular.addEventListener("click",()=>{containerFilms.innerHTML="";getData("popular")});
btnrated.addEventListener("click",()=>{containerFilms.innerHTML="";getData("top_rated")});
btnupcoming.addEventListener("click",()=>{containerFilms.innerHTML="";getData("upcoming")});
console.log(tabCards)
//getData("popular");


