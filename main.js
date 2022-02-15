const url = "http://localhost:3000/movies";

function listMovies() {
  document.getElementById("movieList").innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let movie of data) {
      }
    });
}

console.log(listMovies());
