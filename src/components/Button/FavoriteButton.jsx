import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useState } from "react";

export default function FavoriteButton(props) {
  const [checked, setChecked] = useState(false);
//   const [storage, setStorage] = useState([])
  const checkedHandler = () => {
    setChecked(!checked);
    if(checked === false) {
        localStorage.setItem('id', props.data);
        // if(storage.length === 0) {
        //     setStorage(localStorage.getItem('id'))
        // } else {
        //     setStorage(prev => [...prev, localStorage.getItem('id')]);
        // }
        // console.log(storage);
    } else {
        localStorage.removeItem('id')
    }
    console.log(checked);
  };

  return (
    <>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onChange={checkedHandler}
      />
    </>
  );
}
