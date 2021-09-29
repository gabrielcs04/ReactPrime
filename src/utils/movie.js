export function getListMovies(size, movies) {
  let listMovies = [];

  for (let i = 0, l = size; i < l; i++) {
    listMovies.push(movies[i]);
  }

  return listMovies;
}

export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length);
}