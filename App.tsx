import React from 'react';
import {  Text, StatusBar } from 'react-native';
import {Container} from './styles';
import Header from './components/Header';
import Content from './components/Content';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
    <Container>
      <Header />
      <Content />
    </Container>
    </>
  );
}