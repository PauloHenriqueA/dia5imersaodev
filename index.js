let movies = [];
let result = document.getElementById("result");
let id = 1;

function getMovies() {
  let contentHTML = "";
  movies.forEach((elem) => {
    contentHTML += `<div class="movie"><span class="title">${elem.title}</span><img src="${elem.image}"><span class="remove" onclick ="removeMovie(${elem.id})">Remover</span></div>`;
  });
  result.innerHTML = contentHTML;
}

function removeMovie(id) {
  let index = movies.findIndex((elem) => elem.id === id);
  movies.forEach((elem) => {
    if (elem.id == id) {
      movies.splice(index, 1);
    }
  });
  getMovies();
}

btnAdd.addEventListener("click", () => {
  let title = document.getElementById("movieTitle");
  let image = document.getElementById("movieImage");
  if (title.value != "" && image.value != "") {
    const findMovie = movies.find((movie) => {
      return movie.title === title.value;
    });

    if (!findMovie) {
      movies.push({
        id: id,
        title: title.value,
        image: image.value
      });
      id++;
    } else {
      alert("Filme já adicionado!");
    }
  } else {
    alert("Preencha os campos corretamente!");
  }
  title.value = "";
  image.value = "";
  getMovies();
});
