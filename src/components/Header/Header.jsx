import logo from "../../assets/soolsoolsool.png";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 230,
        height: 38,
        marginLeft: "30px",
        background: "#F7F7F7",
        boxShadow: "0",
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="무엇을 찾고 계신가요?"
        inputProps={{ "aria-label": "무엇을 찾고 계신가요?" }}
      />
    </Paper>
  );
}

const Image = styled.img`
  width: 100px;
  height: 40px;
  object-fit: cover;
`;

const Header = () => {
  return (
    <Box sx={{ width: "100%", height: "120px", boxShadow: "1" }}>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          borderBottom: "1px solid lightgray",
          padding: "18px 69px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "40px",
            margin: "0px auto",
            maxWidth: "1144px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Image src={logo} alt="main logo" />
            </Link>
            <Search />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link
              href="/login"
              sx={{
                marginRight: "15px",
                color: "#878787",
                textDecoration: "none",
              }}
            >
              로그인
            </Link>
            <Link href="/mypage" sx={{ color: "#878787" }}>
              <PermIdentitySharpIcon fontSize={"large"} />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", padding: "0px 69px", display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1144px",
            height: "40px",
            margin: "0px auto",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: 'center'
          }}
        >
            <Link href="/explore" sx={{textDecoration: 'none', color: '#3E3E3E', fontWeight: 'bold'}}>전체상품</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;