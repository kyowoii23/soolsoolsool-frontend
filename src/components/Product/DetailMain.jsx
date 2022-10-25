import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import PriceCard from "./PriceCard";
import NameCard from "./NameCard";
import DetailImage from "./DetailImage";

const DetailMain = () => {
  return (
    <Box sx={{ bgcolor: "#F8F3F1", height: "auto", minHeight: '33vh', marginTop: '1px' }}>
      <Grid container spacing={0}>
        <Grid item xs={3} sx={{ height: "auto" }}>
          <DetailImage />
        </Grid>
        <Grid item xs={9} sx={{ height: "auto" }}>
          <NameCard />
        </Grid>
        {/* <Grid item xs={4} sx={{ height: "330px" }}>
          <PriceCard />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default DetailMain;
