import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getMovieSave(key) {
  const myMovies = await AsyncStorage.getItem(key);
  let moviesSave = JSON.parse(myMovies) || [];
  return moviesSave;
}

export async function saveMovie(key, newMovie) {
  let moviesStored = await getMovieSave(key);
  const hasMovie = moviesStored.some(item => item.id === newMovie.id);

  if(hasMovie) {
    return;
  }

  moviesStored.push(newMovie);
  await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
}

export async function deleteMovie(id) {
  let moviesStored = await getMovieSave('@ReactPrime');

  let myMovies = moviesStored.filter(item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('@ReactPrime', JSON.stringify(myMovies))
  return myMovies;
}

export async function hasMovie(movie) {
  let moviesStored = await getMovieSave('@ReactPrime');

  const hasMovie = moviesStored.find(item => item.id === movie.id)

  if(hasMovie) {
    return true;
  }

  return false;
}