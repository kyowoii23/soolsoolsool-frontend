import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PriceCard() {
  return (
    <Card sx={{ minWidth: 100, mt: 6 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Boksoon
        </Typography>
        <Typography variant="h5" component="div">
          29000원
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
          Average of all users-reported prices
        </Typography>
        <hr />
        <br />
        <Typography variant="body2">
          Better value? Available prices for a 4.3 Southern Italy Primitivo are
          starting at around ₩85
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
