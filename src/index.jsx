import { render } from "react-dom";
import { styled } from "@linaria/react";

function App() {
  return <Container>Hello there!!</Container>;
}

const Container = styled.div`
  text-transform: uppercase;
  color: rebeccapurple;
`;

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
