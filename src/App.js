import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DetailPage from './pages/DetailPage';
import ExplorePage from './pages/ExplorePage';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/detail' element={<DetailPage/>} />
        <Route path='/explore' element={<ExplorePage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
