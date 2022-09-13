import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SoolDetail from './pages/SoolDetail';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={MainPage()} />
        <Route path='/detail' element={DetailPage()} />
        <Route path='/:id' element={SoolDetail()} />
      </Routes>
    </Router>
  );
}

export default App;
