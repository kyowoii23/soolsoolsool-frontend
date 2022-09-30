import React from 'react'

import Container from "@mui/material/Container";
import MyPageTop from '../components/MyPage/MyPageTop';
import MyPageBottom from '../components/MyPage/MyPageBottom';

function MyPage() {
  return (
    <div>
        <Container fixed sx={{marginTop: '30px', color: '#747474'}}>
            <MyPageTop />
            <MyPageBottom />
        </Container>
    </div>
  )
}

export default MyPage