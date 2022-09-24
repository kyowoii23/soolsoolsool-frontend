import React from "react";
import StrengthBar from "./StrengthBar";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const TastingSlider = () => {
  return (
    <Container sx={{paddingTop: "100px"}}>
      <Box>
        <Typography sx={{ fontSize: "1.7rem", fontWeight: "bold" }}>
          What does this liquor taste like?
        </Typography>
        <StrengthBar />
      </Box>
    </Container>
  );
};

export default TastingSlider;
