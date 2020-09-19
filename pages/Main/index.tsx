import React from "react";

import Content from "./components/Content";
import Header from "../../components/Header";
import { Container } from "./styles";
import { NavigationProps } from "../../@types";

function Main({ navigation, route }: NavigationProps) {
  return (
    <Container>
      <Header />
      <Content navigation={navigation} route={route} />
    </Container>
  );
}

export default Main;
