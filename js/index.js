const ARRMOVIES = [
    "The Sinner",
    "Venon",
    "El Irlandes",
    "Suits",
    "La maldicion",
    "Triple frontrera",
    "Defenders"
];

//  PASOS

//  1 - ONCLICK IMG SEARCH
//  2   AGREGAR UN LISTENER INPUT VALUE
//  3   PINTAR PELICULAS QUE CONTENGAN EL VALUE DEL INPUT

function clickSearchIcon () {
    let icon = document.getElementById("searchIcon");

    //1
    icon.classList.toggle("selected");

    let input = document.getElementById("searchInput");
    let searchListContainer = document.getElementById("searchListContainer");
    if(icon.classList.contains("selected")){
        input.style.visibility ="visible";
        input.style.opacity = 1; 
        searchListContainer.style.display ="block";
        //2
        input.addEventListener("input", searchlist);
    }else {
        input.style.visibility ="hidden";
        input.style.opacity = 0;
        searchListContainer.style.display ="none";
        //2
        input.removeEventListener("input", searchlist);
    }
}

function searchlist(event) {
    const VALUE = event.target.value;

    //3

    let searchlist = document.getElementById("searchList");

    searchlist.innerHTML = "";

    for(let index = 0; index < ARRMOVIES.length; index ++) {
        const MOVIE = ARRMOVIES [index];
        if (MOVIE.toLowerCase().includes(VALUE.toLowerCase()) && VALUE != "") {
            let htmlMovie = document.createElement("li");
            htmlMovie.innerHTML = MOVIE;
            searchlist.appendChild(htmlMovie);
        }
    }
}