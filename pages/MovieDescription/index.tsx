import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import {
  Container,
  Description,
  Title,
  MovieTitle,
  Rate,
  ButtonBack,
  ActorWrapper,
  ActorsContainer,
  ActorImage,
  ActorName,
  ActorCharacter,
} from "./styles";
import { Linking, TouchableHighlight, Text } from "react-native";
import Content from "./components/Content";
import api from "../../services/api";
import Icon from "react-native-vector-icons/FontAwesome";

function MovieDescription({ route, navigation }) {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const { movieId } = route.params;
  const [movie, setMovie] = useState({});
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function getMovie() {
      const response = await api.get(`/movie/${movieId}?&language=pt-BR`);
      setMovie(response.data);
    }
    async function getActors() {
      const actors = (await api.get(`/movie/${movieId}/credits?language=pt-BR`))
        .data.cast;
      setActors(actors.slice(0, 12));
    }
    getMovie();
    getActors();
  }, []);

  async function openHomepage() {
    const supported = await Linking.canOpenURL(movie.homepage);
    if (supported) {
      await Linking.openURL(movie.homepage);
    }
  }
  return (
    <Container>
      <Header image={imageUrl + movie.backdrop_path} />
      <ButtonBack onPress={() => navigation.goBack()}>
        <Icon name="angle-left" color={"#fff"} size={22} />
      </ButtonBack>
      <MovieTitle>
        {movie.title + " - " + new Date(movie.release_date).getFullYear()}
      </MovieTitle>
      <Rate>
        <Icon name="star" color={"#ff0"} size={20} /> {movie.vote_average}
      </Rate>
      <Content>
        {movie.overview !== "" && (
          <>
            <Title>Sinopse:</Title>
            <Description>{movie.overview}</Description>
          </>
        )}
        <Title>Título original:</Title>
        <Description>{movie.original_title}</Description>

        <Title>Data de lançamento: </Title>
        <Description>
          {new Date(movie.release_date).toLocaleDateString()}
        </Description>

        <Title>Gêneros: </Title>
        <Description>
          {movie.genres &&
            movie.genres.map((gen, index) => {
              if (index !== movie.genres.length - 1) {
                return (
                  <React.Fragment key={gen.id}>{gen.name} - </React.Fragment>
                );
              } else {
                return <React.Fragment key={gen.id}>{gen.name}</React.Fragment>;
              }
            })}
        </Description>

        <Title>Atores:</Title>
        <ActorsContainer>
          {actors.map((actor) => (
            <ActorWrapper key={actor.id}>
              <ActorImage source={{ uri: imageUrl + actor.profile_path }} />
              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>{actor.character}</ActorCharacter>
            </ActorWrapper>
          ))}
        </ActorsContainer>

        {movie.homepage !== "" && (
          <>
            <Title>Homepage: </Title>
            <TouchableHighlight
              onPress={openHomepage}
              style={{ marginBottom: 30 }}
            >
              <Description color={"#00f"}>{movie.homepage}</Description>
            </TouchableHighlight>
          </>
        )}
      </Content>
    </Container>
  );
}

export default MovieDescription;
