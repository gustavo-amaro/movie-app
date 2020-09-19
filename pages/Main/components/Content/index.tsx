import React, { useState, useEffect, useCallback } from "react";
import { Container, MovieContainer, PosterImage, Votes } from "./styles";
import api from "../../../../services/api";
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Search from "../Search";

function Content({ navigation = null }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function getMovies() {
      const response = await api.get(
        `/discover/movie?&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );
      setMovies(response.data.results);
      setIsLoading(false);
    }
    getMovies();
  }, []);

  function handleTouchMovie(movie) {
    navigation.navigate("MovieDescription", { movieId: movie.id });
  }

  function Item({ item = null }) {
    return (
      <TouchableWithoutFeedback
        key={item.id}
        onPress={() => handleTouchMovie(item)}
      >
        <MovieContainer>
          <Votes>{item.vote_average}</Votes>
          <PosterImage source={{ uri: imageUrl + item.poster_path }} />
        </MovieContainer>
      </TouchableWithoutFeedback>
    );
  }

  const styles = StyleSheet.create({
    list: {
      height: "100%",
    },
    listContent: {
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 10,
    },
  });

  async function getMovies() {
    const response = await api.get(
      `/discover/movie?&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
        page + 1
      }`
    );
    setMovies(movies.concat(response.data.results));
    setIsLoading(false);
    setPage(page + 1);
  }

  const handleLoadMore = useCallback(() => {
    setIsLoading(true);
    if (!isLoading) {
      console.log("loading more movies...");
      getMovies();
    }
  }, [isLoading]);

  function renderFooterLoading() {
    return isLoading ? (
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  }

  async function searchMovie(searchText) {
    console.log(searchText);

    if (searchText === "") {
      if (isSearch) setPage(0);
      setIsSearch(false);
      getMovies();
      return;
    }

    if (!isSearch || !searchText.distanceFromEnd) {
      const response = await api.get(
        `/search/movie?&query=${searchText}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${1}`
      );
      setMovies(response.data.results);
      setIsLoading(false);
      setPage(1);
      setIsSearch(true);
      setSearchTerm(searchText);
      return;
    }

    const response = await api.get(
      `/search/movie?&query=${searchTerm}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
        page + 1
      }`
    );
    setMovies(movies.concat(response.data.results));
    setIsLoading(false);
    setPage(page + 1);
  }

  return (
    <>
      <Search onSearch={searchMovie} />
      <Container
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
        }}
      >
        <FlatList
          data={movies}
          renderItem={({ item }) => <Item item={item} />}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={isSearch ? searchMovie : handleLoadMore}
          onEndReachedThreshold={0.01}
          ListFooterComponent={renderFooterLoading}
        />
      </Container>
    </>
  );
}

export default Content;
