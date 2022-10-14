import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicRating from "../UI/BasicRating";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function NameCard() {
  const [data, setData] = useState(null);
  const getData = async () => {
    const response = await axios.get("http://13.125.37.220:8081/api/item/2");
    setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) return (<>로딩 중...</>)
  return (
    <>
      {<>
          <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Boksoon
          </Typography>
          <Typography variant="h5" component="div" key={data.id}>
            {data.name}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
            Average of all users-reported prices
          </Typography>
          <br />
          <BasicRating />
          <Typography component="legend" sx={{ color: "#0b6db7" }}>
            [20 review]
          </Typography>
          <br />
          <Typography variant="body2">주종 : </Typography>
          <Typography variant="body2">도수 : </Typography>
          <Typography variant="body2">용량 : </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </>
      }
    </>
  );
}
