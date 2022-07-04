// http://www.omdbapi.com/?apikey=baeb28bc&
// http://img.omdbapi.com/?apikey=baeb28bc&

// async function onSearch(event) {
//   const movie = event.target.value
//   console.log(event)
// }
const movieListEl = document.querySelector('.movie__list')


async function main() {
  const movies = await fetch (`http://www.omdbapi.com/?apikey=baeb28bc&s=fast`)
  const moviesData = await movies.json()
  movieListEl.innerHTML = moviesData.Search.slice(0, 6).map(movie => movieHTML(movie)).join('')
}

main()

async function onSearch(event) {
  const search = event.target.value
  const movies = await fetch (`http://www.omdbapi.com/?apikey=baeb28bc&s=${search}`)
  const moviesData = await movies.json()
  movieListEl.innerHTML = moviesData.Search.slice(0, 6).map(movie => movieHTML(movie)).join('')
}

function movieHTML(movie) {
  return `<div class="movie__card">
  <img class="movie__poster" src="${movie.Poster}" alt="">
  <h3 class="movie__title">${movie.Title}</h3>
  <h4><i class="fa-solid fa-calendar-days"></i> :${movie.Year}</h4>
</div>`
}