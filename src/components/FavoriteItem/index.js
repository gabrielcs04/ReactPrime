import React from "react";
import { View, Text } from 'react-native';
import {
  Container,
  Title,
  RateContainer,
  Rate,
  ActionContainer,
  DatailButton,
  DeleteButton,
} from './styles';
import { Ionicons, Feather } from '@expo/vector-icons'

export default function FavoriteItem({ data, deleteMovie, navigatePage }) {
  return(
    <Container>
      <Title size={22}>{data.title}</Title>
      <RateContainer>
        <Ionicons name='md-star' size={12} color="#e7a74e" />
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>

      <ActionContainer>
        <DatailButton activeOpacity={0.7} onPress={() => navigatePage(data)}>
          <Title size={14}>Ver detalhes</Title>
        </DatailButton>

        <DeleteButton activeOpacity={0.7} onPress={() => deleteMovie(data.id)}>
          <Feather name="trash" size={24} color="#fff" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  )
}