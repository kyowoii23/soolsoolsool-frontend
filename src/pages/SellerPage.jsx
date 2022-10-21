import React from "react";
import { Container } from "@mui/material";
import SellerTable from "../components/Table/SellerTable"
import SellerSearchBar from "../components/AppBar/SellerSearchBar"

function SellerPage() {
    return (
        <div>
            <Container fixed sx={{ marginTop: "30px", color: "#747474" }}>
                <SellerSearchBar />
                <SellerTable />
            </Container>
        </div>
    );
}

export default SellerPage;
