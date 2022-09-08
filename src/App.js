import { Fragment } from "react";
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Footer />
    </Fragment>
  );
}

export default App;
