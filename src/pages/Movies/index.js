import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import {
  Container,
  ListMovies,
} from './styles';
import { getMovieSave, deleteMovie } from '../../utils/storage';
import FavoriteItem from '../../components/FavoriteItem';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function Movies() {
  const [ movies, setMovies ] = useState([]);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;
    
    async function getFavoriteMovies() {
      const result = await getMovieSave('@ReactPrime');
      if(isActive) {
        setMovies(result);
      }
    }

    if(isActive) {
      getFavoriteMovies();
    }

    return() => {
      isActive = false;
    }
  }, [isFocused])

  async function handleDelete(id) {
    const result = await deleteMovie(id);
    setMovies(result);
  }

  function navigateDetailPage(item) {
    navigation.navigate('Detail', { id: item.id })
  }

  return(
    <Container>
      <Header title="Minha lista"/>

      <ListMovies
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <FavoriteItem 
            data={item}
            deleteMovie={handleDelete}
            navigatePage={() => navigateDetailPage(item)}
          />
          )}
      />
    </Container>
  )
}