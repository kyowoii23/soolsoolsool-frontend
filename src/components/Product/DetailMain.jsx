import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PriceCard from "./PriceCard";
import NameCard from "./NameCard";
import DetailImage from "./DetailImage";

const DetailMain = () => {
  return (
    <Box sx={{ bgcolor: "#F8F3F1", height: "330px", marginTop: '1px' }}>
      <Grid container spacing={0}>
        <Grid item xs={3} sx={{ height: "330px" }}>
          <DetailImage />
        </Grid>
        <Grid item xs={5} sx={{ height: "330px" }}>
          <NameCard />
        </Grid>
        <Grid item xs={4} sx={{ height: "330px" }}>
          <PriceCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailMain;
