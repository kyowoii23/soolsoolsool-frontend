import React from 'react'
import styled from 'styled-components';
import Container from "@mui/material/Container";
import img from "../../assets/복순도가.png"

const ImageSize = styled.img`
  width: 100%;
  height: 100%;
`;

function DetailImage() {
  return (
        <ImageSize src={img} alt="sool image" />
  )
}

export default DetailImage