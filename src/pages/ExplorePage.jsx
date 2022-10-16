import React from "react";

import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import ExploreSidebar from "../components/SideBar/ExploreSideBar"

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



const MainPage = () => {
    return (
        <>
            <Container fixed sx={{ marginTop: "30px", color: "#747474", display: "flex"}}>
                <Box sx={{ width: "35%", marginRight: "32px"}}>
                    <ExploreSidebar />
                </Box>
                <Box sx={{ width: "65%" }}>
                    <InfiniteScroll />
                </Box>
            </Container>
        </>
    )
};

export default MainPage;