import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  position: absolute;
  top: 17%;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  width: 75%;
  height: 100%;
  background: #fff;
  padding: 0 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const SearchButton = styled.TouchableOpacity`
  background: #32a852;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 20%;
  elevation: 4;
`;

export const TextSearchButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;
