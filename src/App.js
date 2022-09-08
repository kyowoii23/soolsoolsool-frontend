import { Fragment } from "react";
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
