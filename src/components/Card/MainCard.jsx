
import Stack from '@mui/material/Stack';
import { forwardRef } from 'react'
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import img from '../../assets/복순도가.png'
import styled from 'styled-components';


const ImageSize = styled.img`
  width: 10vw;
  height: 15vh;
`;

const MainPost = props => {
  const { type, name, campany } = props

  return (
    <Box sx={{ 
      padding: "24px", 
      height: "24vh",
      border: "1px solid #A6A9AA",
      borderRadius: "12px",
      width: "100%",
      "&:hover .childBox1": {
          transform: "scale(1.5)",
          transitionDuration: "0.6s"
      } }}>
      <Box sx={{ display: "flex" }}>
        <Box className='childBox1'>
          <ImageSize src={img}/>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h4" gutterBottom sx={{ marginBottom: "-6px" }}>
              4.5
          </Typography> 
          <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
              <StarBorderRoundedIcon color="error" sx={{ marginRight: "-6px" }}/>
              <StarBorderRoundedIcon color="error" sx={{ marginRight: "-6px" }}/>
              <StarBorderRoundedIcon color="error" sx={{ marginRight: "-6px" }}/>
              <StarBorderRoundedIcon color="error" sx={{ marginRight: "-6px" }}/>
              <StarBorderRoundedIcon color="error" />
          </Stack>
          <Typography variant="body1" gutterBottom >
              160 ratings
          </Typography> 
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom sx={{ marginBottom: "0" }}>
            Type: {type}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ marginBottom: "0" }}>
            명칭: {name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            제조사 : {campany}
        </Typography>
      </Box>
    </Box>
  )
}

export default MainPost