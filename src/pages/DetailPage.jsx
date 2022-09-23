import React from "react";
import DetailMain from "../components/Product/DetailMain";
import TastingSlider from "../components/TastingNote/TastingSlider";
import Review from "../components/Review/Review";

import Container from "@mui/material/Container";

const DetailPage = () => {
  return (
    <>
      <Container fixed>
        <DetailMain />
        <TastingSlider />
        <Review />
      </Container>
    </>
  );
};

export default DetailPage;
