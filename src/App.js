import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DetailPage from "./pages/DetailPage";
import ExplorePage from "./pages/ExplorePage";
import MyPage from "./pages/MyPage";
import SellerPage from "./pages/SellerPage";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/detail/product/:productId" element={<DetailPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/mypage" element={<Navigate replace to='/mypage/settings' />} />
        <Route path="/mypage/*" element={<MyPage /> } />
        <Route path="/seller" element={<SellerPage /> } />
        <Route path="*" element={<NotFound /> } />
      </Routes>
    </Layout>
  );
}

export default App;
