import React from 'react';

import Content from './components/Content';
import Header from '../../components/Header';
import { Container } from './styles';

function Main({navigation}){

  return(
  <Container>
    <Header />
    <Content navigation={navigation} />
   </Container>
  )
}

export default Main;