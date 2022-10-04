import React from "react";
import styled from '@emotion/styled';

import Slider from '../components/Slider/Slider';
import MainButton from '../components/Button/MainButton';
import Typography from '@mui/material/Typography';


const Container = styled.div`
    margin: 64px;
    padding: 8px 12px;
    height: auto;
    // box-shadow: 3px 3px 5px 5px grey;
`;


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
                <Slider />
            </Container>
        </>
    )
};

export default MainPage;