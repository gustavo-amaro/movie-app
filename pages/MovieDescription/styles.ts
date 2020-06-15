import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background:  #d9d9d9;
`;

export const Description = styled.Text`
  font-size: 16px;
  text-align: justify;
  margin-top: 5px;
  color: ${props=>props.color?props.color:'#000'};
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  width: 100%;
`;

export const MovieTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 15%;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px;
  border-radius: 10px;
`;

export const Rate = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 4%;
  right: 7%;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px;
  border-radius: 10px;
`;

export const ButtonBack = styled.TouchableHighlight`
  position: absolute;
  top: 4%;
  left: 5%;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 2;
`;