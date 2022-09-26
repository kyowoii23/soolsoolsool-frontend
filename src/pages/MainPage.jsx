import React from "react";
import styled from '@emotion/styled';

import Slider from '../components/Slider/Slider';
import MainTopSection from "../section/MainSection/MainTopSection";



const Main = styled.main`
    max-width: 1200px;
    margin: 0 auto;
`;

const Container = styled.div`
    margin: 62px;
    padding: 8px 12px;
    height: auto;
    // box-shadow: 3px 3px 5px 5px grey;
`;


const MainPage = () => {
    return (
        <>
            <Main>
                <Container>
                    <MainTopSection />
                    <Slider />
                </Container>
            </Main>
        </>
    )
};

export default MainPage;