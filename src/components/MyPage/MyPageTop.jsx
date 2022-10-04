import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

function MyPageTop() {
  return (
    <>
      <Box
        mb={2}
        sx={{
          height: "10vh",
          padding: "22px 30px",
          border: "1px solid #F9D537",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: "35%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderRight: '1px solid #F9D537',
            fontWeight: 'bold'
          }}
        >
          이름
        </Box>
        <Box
          sx={{
            width: "45%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Link to='/mypage/wish' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box>wish list</Box>
            <BookmarkAddOutlinedIcon color="primary" />
          </Link>
          <Link to='/mypage/settings' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box>settings</Box>
            <FolderSharedOutlinedIcon color="primary" />
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default MyPageTop;
