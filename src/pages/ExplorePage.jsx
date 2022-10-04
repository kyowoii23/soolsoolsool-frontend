import React from "react";
import styled from '@emotion/styled';

import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import ExploreSidebar from "../components/SideBar/ExploreSideBar"


const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 32px;
    padding: 8px 12px;
    height: auto;
    // box-shadow: 3px 3px 5px 5px grey;
`;

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainPage = () => {
    return (
        <>
            <Container>
                <SideBar>
                    <ExploreSidebar />
                </SideBar>
                <Content>
                    <InfiniteScroll />
                </Content>
            </Container>
        </>
    )
};

export default MainPage;