import React from "react";

import Container from "@mui/material/Container";
import MyPageTop from "../components/MyPage/MyPageTop";
import MyPageBottom from "../components/MyPage/MyPageBottom";
import { Route, Routes } from "react-router-dom";

function MyPage() {
  return (
    <div>
      <Container fixed sx={{ marginTop: "30px", color: "#747474" }}>
        <MyPageTop />
        <Routes>
          <Route path="/wish" element={<MyPageBottom category='wish' />}></Route>
          <Route path="/settings" element={<MyPageBottom category='settings' />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default MyPage;
