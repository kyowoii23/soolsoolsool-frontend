import {useState} from 'react';
import Button from '@mui/material/Button';


const ExploreButton = (props) => {
    const { label } = props

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        // toggle
        setIsActive(current => !current);

        // or set to true
        // setIsActive(true);
    };

    return (
        <Button sx={{ color: "#A6A9AA", width: "6vw" }}
            style={{
                backgroundColor: isActive ? '#1565c0' : '',
                color: isActive ? 'white' : '',
            }}
            onClick={handleClick}
            variant="outlined"
        >
            <b>{label}</b>
        </Button>
    )
}

export default ExploreButton