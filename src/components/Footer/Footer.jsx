import logo from "../../assets/soolsoolsool.png";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Image = styled.img`
  width: 100px;
  height: 40px;
  object-fit: cover;
`;

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        background: "#f7f7f7",
        marginTop: "150px",
        padding: "20px 70px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100px",
          margin: "0px auto",
          maxWidth: "1144px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Link href='/' sx={{ marginRight: "40px" }}>
          <Image src={logo} alt="main logo" />
        </Link>
        <Box>
          '술술술'은 전통주의 가치를 알리기 위해 운영하는
          <br /> 우리술 종합 정보 사이트입니다.
        </Box>
      </Box>
      <hr />
      <Box
        sx={{
          width: "100%",
          margin: "0px auto",
          maxWidth: "1144px",
        }}
      >
        <Box sx={{marginTop: '15px'}}>Copyright © 2022 by Sancheck all rights reserved</Box>
      </Box>
    </Box>
  );
};

export default Footer;