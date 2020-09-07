import React, { useState } from "react";
import {
  Container,
  SearchInput,
  SearchButton,
  TextSearchButton,
} from "./styles";

const Search: React.FC = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <Container>
      <SearchInput
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={{ elevation: 4 }}
        placeholder="Search your movie"
      />
      <SearchButton onPress={() => onSearch(searchText)}>
        <TextSearchButton>Search</TextSearchButton>
      </SearchButton>
    </Container>
  );
};

export default Search;
