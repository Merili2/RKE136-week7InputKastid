const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl= document.querySelector('.UserInputPosterUrl');
const releaseYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.facouriteMovieTitle');

let titleInStorage = localStorage.getItem('title'); 
let imageUrlInStorage = localStorage.getItem('imageUrl'); 
let releaseYearInStorage= localStorage.getItem('releaseYear');

if(titleInStorage && imageUrlInStorage && releaseYearInStorage){
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(35, 35, 64, 0.454),rgba(93, 59, 59, 0.444)),url('${imageUrlInStorage}')`;
}



btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value ; 
    let posterUrlInput = moviePosterUrl.value ; 
    let releaseYearInput = releaseYear.value; 
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseYear', releaseYearInput);
    movieTitleToDisplay.textContent = movieTitleInput; 
    container.style . backgroundImage = `linear-gradient(rgba(35, 35, 64, 0.454),rgba(93, 59, 59, 0.444)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value= ''; 
    releaseYear.value= ''; 
});