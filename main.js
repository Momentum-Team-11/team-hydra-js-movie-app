const url = "http://localhost:3000/movies";
const form = document.getElementById("movie-input")

function listMovies() {
  document.getElementById("movieList").innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let movie of data) {
      }
      console.log(data)
    });
}

listMovies()

form.addEventListener("click", function (event){
  event.preventDefault()

  if (event.target.id.contains('button')) {
    mList(event)
  }
}) 

function mList () {
  const titleText = document.getElementById('title').value
  fetch(url, {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: title,
    
    })
  .then((res) => res.json())
  .then((data) => {
  renderMovieItem(data)
  })})}

  function renderMovieItem(movie) {
    const formEl = document.createElement("li")
    formEl.id = movie.id 
    formEl.classList.add("added")
    formEl.innerHTML = `<span>${movie.title}</span>`
  }
