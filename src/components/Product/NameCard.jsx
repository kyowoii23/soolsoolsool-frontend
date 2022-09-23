import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicRating from "../UI/BasicRating";



export default function NameCard() {
  return (
    // <Card sx={{ minWidth: 200, mt: 4, height: "30vh", bgcolor: "#F8F3F1" }}>
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Boksoon
        </Typography>
        <Typography variant="h5" component="div">
          복순도가 막걸리
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
          Average of all users-reported prices
        </Typography>
        <br />
        <BasicRating />
        <Typography component="legend" sx={{color: "#0b6db7"}}>[20 review]</Typography>
        <br />
        <Typography variant="body2">주종 : </Typography>
        <Typography variant="body2">도수 : </Typography>
        <Typography variant="body2">용량 : </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </>
    // </Card>
  );
}
