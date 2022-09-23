import React from 'react'
import styled from 'styled-components';
import Container from "@mui/material/Container";
import img from "../../assets/복순도가.png"

const ImageSize = styled.img`
  width: 288px;
  height: 288px;
  margin-top: 80px;
`;

function DetailImage() {
  return (
        <ImageSize src={img} alt="sool image" />
  )
}

export default DetailImage