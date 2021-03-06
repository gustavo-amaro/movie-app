import React from "react";
import { Container } from "./styles";

type ContentProps = {
  children: any;
};

function Content({ children }: ContentProps) {
  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      {children}
    </Container>
  );
}

export default Content;
