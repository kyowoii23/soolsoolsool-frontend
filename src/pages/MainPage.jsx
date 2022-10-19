import React from "react";
import Slick from '../components/Slick/Slick';
import MainButton from '../components/Button/MainButton';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styled from 'styled-components';
import img from "../assets/seoul-nightlife.jpg"


const ImageSize = styled.img`
  width: 100%;
  height: 320px;
`;

const date = new Date();
const day = date.getDay();
const weekdays = new Array("Suday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

const MainPage = () => {
    return (
        <Box>
            <Container fixed sx={{ marginTop: "30px", display: "flex", flexDirection: "column"}}>
                <Box>
                    <Typography variant="h4" gutterBottom sx={{ marginBottom: "2vh" }}>
                        <b>Top lists in your area</b>
                    </Typography>            
                    <Typography variant="h6" gutterBottom sx={{ marginBottom: "2vh" }}>
                        Updated every <b>{weekdays[day]}</b>
                    </Typography>
                    <MainButton sx={{marginBottom:"12px"}}/>
                    <Typography variant="body2" gutterBottom sx={{ marginBottom: "2vh" }}>
                        Best Sools 
                    </Typography>
                </Box>
                <Box sx={{ marginBottom: "24vh" }}>
                    <Slick />
                </Box>
            </Container>
            <ImageSize src={img} />
        </Box>
    )
};

export default MainPage;