import React from "react";
import Slick from '../components/Slick/Slick';
import MainButton from '../components/Button/MainButton';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


const date = new Date();
const day = date.getDay();

var weekdays = new Array(7);
weekdays[0] = "일요알";
weekdays[1] = "월요일";
weekdays[2] = "화요일";
weekdays[3] = "수요일";
weekdays[4] = "목요일";
weekdays[5] = "금요일";
weekdays[6] = "수요일";

const MainPage = () => {
    return (
        <>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Top lists in your area
                </Typography>            
                <Typography variant="h6" gutterBottom>
                    Updated every {weekdays[day]}
                </Typography>
                <MainButton />
                <Typography variant="h8" gutterBottom>
                    Best wines
                </Typography>
                <Slick />
            </Container>
        </>
    )
};

export default MainPage;