import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProductDetail } from "../../api/axios";
import { useParams } from "react-router-dom";
import FavoriteButton from "../Button/FavoriteButton";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicRating from "../UI/BasicRating";


export default function NameCard() {
  const [data, setData] = useState(null);
  const param = useParams();

  useEffect(() => {
    getProductDetail(param.productId).then((data) => {
      setData(data);
    });
  }, [param]);

  if (!data) return <>Loading...</>;
  return (
    <>
      <CardContent>
        <Typography component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {data.company}
          </Typography>
          <Typography component='div'><FavoriteButton data={data.id} /></Typography>
        </Typography>
        <Typography variant="h5" component="div" key={data.id}>
          <b>{data.name}</b>
        </Typography>
        <br />
        <BasicRating />
        <Typography component="legend" sx={{ color: "#0b6db7" }}>
          [20 review]
        </Typography>
        <br />
        <Typography variant="body2">주종 : {data.soolType}</Typography>
        <Typography variant="body2">도수 : {data.degree}</Typography>
        <Typography variant="body2">용량 : {data.size}ml</Typography>
        <Typography variant="body2">원재료 : {data.material}</Typography>
        <br />
        <Typography variant="body2">제품소개 : {data.info}</Typography>
      </CardContent>
    </>
  );
}
