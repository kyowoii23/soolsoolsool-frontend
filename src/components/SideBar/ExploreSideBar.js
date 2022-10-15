import { useState } from 'react';
import ExploreButton from '../Button/ExploreButton';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';


const marks = [
    {
      value: 50000,
      label: '5만원',
    },
    {
      value: 100000,
      label: '10만원',
    },
    {
      value: 150000,
      label: '15만원',
    },
    {
      value: 200000,
      label: '20만원+',
    },
];

const minDistance = 10;

const ExploreSidebar = () => {
    const [value, setValue] = useState([20000, 150000]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
        return;
        }
        console.log(newValue)
        if (activeThumb === 0) {
        setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
        setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };


    return (
        <Container>
            <Box sx={{ width: '100%', marginBottom: "64px" }} >
                <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                    <Typography variant="h5" gutterBottom>
                        Sool Types
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Select multiple
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ marginBottom: "12px", display: "flex", justifyContent: "space-around" }} >
                    <ExploreButton label={'탁 주'} />
                    <ExploreButton label={'약 주'} />
                    <ExploreButton label={'청 주'} />
                </Stack>
                <Stack direction="row" spacing={2} sx={{ marginBottom: "12px", display: "flex", justifyContent: "space-around" }} >
                    <ExploreButton label={'과실주'} />
                    <ExploreButton label={'증류주'} />
                    <ExploreButton label={'기타'} />
                </Stack>
            </Box>
            <Box sx={{ width: '100%', marginBottom: "64px" }} >
                <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                    <Typography variant="h5" gutterBottom>
                        Price Range
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        KRW
                    </Typography>
                </Stack>
                <Box>
                    <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                        <Typography variant="button" gutterBottom>
                            {value[0].toLocaleString()}원
                        </Typography>

                        <Typography variant="button" display="block" gutterBottom>
                            {value[1].toLocaleString()}원
                        </Typography>
                    </Stack>
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={value}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        disableSwap
                        min={0}
                        max={200000}
                        step={1000}
                        marks={marks}
                        color='warning'
                    />
                </Box>
            </Box>
            <Box sx={{ width: '100%', marginBottom: "64px" }} >
                <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                    <Typography variant="h5" gutterBottom>
                        SSSool Average Rating
                    </Typography>
                </Stack>
                <FormControl>
                    <RadioGroup 
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="4.5"
                        name="radio-buttons-group" 
                        color='warning'
                        
                    >
                        <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
                            <FormControlLabel value="4.5" control={<Radio color='warning' />} />
                            <StarRoundedIcon fontSize='small' />
                            <StarRoundedIcon fontSize='small' />
                            <StarRoundedIcon fontSize='small' />
                            <StarRoundedIcon fontSize='small' />
                            <StarHalfRoundedIcon fontSize='small' />
                            <Typography variant="caption" display="block" gutterBottom sx={{ marginLeft: "10px" }}>
                                <b>4.5+ </b> Very rare stuff
                            </Typography>
                        </Stack>
                        <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
                            <FormControlLabel value="4.0" control={<Radio color='warning' />} />
                            <StarRoundedIcon fontSize='small' />
                            <StarRoundedIcon fontSize='small' />
                            <StarRoundedIcon fontSize='small' />
                            <StarRoundedIcon fontSize='small' />
                            <StarBorderRoundedIcon fontSize='small' />
                            <Typography variant="caption" display="block" gutterBottom sx={{ marginLeft: "10px" }}>
                                <b>4.0+ </b> Good stuff
                            </Typography>
                        </Stack>
                        <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
                            <FormControlLabel value="3.5" control={<Radio color='warning' />} />
                            <StarRoundedIcon fontSize='small' />
                            <StarRoundedIcon fontSize='small' />
                            <StarRoundedIcon fontSize='small' />
                            <StarHalfRoundedIcon fontSize='small' />
                            <StarBorderRoundedIcon fontSize='small' />
                            <Typography variant="caption" display="block" gutterBottom sx={{ marginLeft: "10px" }}>
                                <b>3.5+ </b> Common stuff
                            </Typography>
                        </Stack>
                        <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
                            <FormControlLabel value="anyting" control={<Radio color='warning' />} /> 
                            <Typography variant="caption" display="block" >
                                Any rating
                            </Typography>
                        </Stack>
                    </RadioGroup>
                </FormControl>
            </Box>
        </Container>
    )
}

export default ExploreSidebar