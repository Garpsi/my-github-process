// http://www.omdbapi.com/?apikey=baeb28bc&
// http://img.omdbapi.com/?apikey=baeb28bc&

const movieListEl = document.querySelector('.movie__list')
const spinnerWrapper = document.querySelector('.spinner__wrapper')

async function onSearch(event) {
  event.preventDefault()
  spinnerWrapper.classList += ' movies__loading'
  const search = event.target.value
  movies = await fetch (`https://www.omdbapi.com/?apikey=baeb28bc&s=${search}`)
  const moviesData = await movies.json()
  spinnerWrapper.classList.remove('movies__loading')
  document.querySelector('.no__results').innerHTML = ''

  if (!moviesData.Search) {
    movieListEl.innerHTML = ''
    return document.querySelector('.no__results').innerHTML += `No results for <span class=no__search>"${search}"</span>. Please try another movie.`
  }

  movieListEl.innerHTML = moviesData.Search.slice(0, 6).map(movie => movieHTML(movie)).join('')
}

function movieHTML(movie) {
  console.log(movie.Poster)
  if (movie.Poster === 'N/A') {
    return ''
  }
  return `<div class="movie__card">
    <img class="movie__poster" src="${movie.Poster}" alt="">
    <h3 class="movie__title">${movie.Title}</h3>
    <h4><i class="fa-solid fa-calendar-days"></i> : ${movie.Year}</h4>
    </div>`
  
}

var slider = document.getElementById('myRange')
var output = document.getElementById('year')

slider.oninput = function(yr) {
  output.innerHTML = this.value
}
