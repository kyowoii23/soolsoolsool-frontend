import React from "react";

import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import ExploreSidebar from "../components/SideBar/ExploreSideBar"


const MainPage = () => {
    return (
        <>
            <ExploreSidebar />
            <InfiniteScroll />
        </>
    )
};

export default MainPage;