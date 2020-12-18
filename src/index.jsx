import { render } from "react-dom";
import { css } from "@linaria/core";

function App() {
  return <div className={_app}>Hello there!!</div>;
}

const _app = css`
  font-weight: bold;
  color: rebeccapurple;
`;

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
