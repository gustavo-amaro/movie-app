import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  position: absolute;
  flex-direction: row;
  flex-wrap: wrap;
  background: #fff;
  width: 100%;
  height: 75%;
  z-index: 4;
  bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const MovieContainer = styled.View`
  display: flex;
  width: 45%;
  height: 250px;
  margin-left: 3%;
  border-radius: 20px;
  align-items: center;
  justify-content: flex-start;
  background: #d9d9d9;
  margin-top: 10px;
`;

export const PosterImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const MoviesWrapper = styled.View`
   display: flex;
   flex-direction: row;
    width: 100%;
    height: 250px;
    margin-top: 10px;
`;

export const Votes = styled.Text`
  text-align: center;
  color: #fff;
  background: #000;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 16px;
  width: 30px;
  height: 22px;
  position: absolute;
  z-index: 2;
  left: 0;
`;