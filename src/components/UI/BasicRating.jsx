import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({ratingValue}) {
  let value = ratingValue;

  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  return (
    <Box style={style}>
      <Rating
        name="read-only"
        value={value}
        readOnly
      />
    </Box>
  );
}
