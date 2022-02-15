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
  formEl.innerHTML = `<span>${movie.title}</span><i alt="Delete Movie" class="delete"></i><i alt="Edit Movie" class="Edit"></i>`;
  list.append(formEl);
}
