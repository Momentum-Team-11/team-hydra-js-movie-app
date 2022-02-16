

const url = "http://localhost:3000/movies";
const form = document.getElementById("movie-input");
const list = document.getElementById("movie-list");

function listMovies() {
  document.getElementById("movie-list").innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let movie of data) {
      renderMovieItem(movie);
      }
    });
}

listMovies();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const titleText = document.getElementById("title").value;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titleText,
    })
  })
  .then((res) => res.json())
  .then((data) => {
    renderMovieItem(data);
  })
})

function renderMovieItem(movie) {
  const formEl = document.createElement("li");
  formEl.id = movie.id;
  formEl.classList.add("added");
  formEl.innerHTML = `<span>${movie.title}</span><i class="ml2 dark-red fas fa-times delete"></i><i class="ml3 fas fa-edit edit"></i>`;
  list.append(formEl);
}

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
  deleteMovie(e.target)
  }
  if (e.target.classList.contains('edit')) {
    editMovie(e.target)
  }
})

function deleteMovie (element) {
  const movieId = element.parentElement.id
  fetch(url + '/' + movieId, {
    method: 'DELETE',
  }) .then (function () {
    element.parentElement.remove()
  }
  )}

  function editMovie (element) {
    const movieId = element.parentElement.id
    fetch(url + '/' + movieId, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      title: titleText.value,
    }) .then (function () {
    
    }
    )}
