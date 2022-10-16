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
        <Button sx={{ color: "#A6A9AA"  }}
            style={{
                backgroundColor: isActive ? '#f57c00' : '',
                color: isActive ? 'white' : '',
            }}
            onClick={handleClick}
        >
            {label}
        </Button>
    )
}

export default ExploreButton