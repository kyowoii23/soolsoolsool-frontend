import React from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function MyPageBottom() {
  return (
    <>
      <Box sx={{height: '50vh', padding: '30px 50px', border: '1px solid #F9D537', borderRadius: '12px'}}>
        <Box sx={{height: '40px', borderBottom: '1px solid #F9D537'}}>
            <Box sx={{fontWeight: 'bold'}}>Information</Box>
        </Box>
        <Box sx={{padding: '22px 10px', borderBottom: '1px solid #F9D537'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                <Box>Name</Box>
                <Box sx={{fontWeight: 'bold'}}>name</Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                <Box>Nickname</Box>
                <Box sx={{fontWeight: 'bold'}}>nickname</Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>email</Box>
                <Box sx={{fontWeight: 'bold'}}>example@gmail.com</Box>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '35px'}}>
                <Link>update</Link>
            </Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '15px', padding: '22px 10px'}}>
            <Box sx={{fontWeight: 'bold'}}>Delete account</Box>
        </Box>
      </Box>
    </>
  );
}

export default MyPageBottom;
