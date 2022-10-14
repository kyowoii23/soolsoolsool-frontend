import React from 'react'
import styled from 'styled-components';
import img from "../../assets/복순도가.png"

const ImageSize = styled.img`
  width: 330px;
  height: 330px;
`;

function DetailImage() {
  return (
        <ImageSize src={img} alt="sool image" />
  )
}

export default DetailImage