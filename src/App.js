import { Fragment } from "react";
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

import Header from "./components/Header/Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
}

export default App;
