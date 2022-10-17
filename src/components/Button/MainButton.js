import {useState} from 'react';

import './ExploreButton.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const buttonStyle = {
    color: "black", 
    width: "6vw",
    borderRadius: "16px"
}

const MainButton = (props) => {
    const { sx } = props
    const [isActive, setIsActive] = useState(true)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)

    const handleClick = () => {
        setIsActive(true);
        setIsActive2(!setIsActive);
        setIsActive3(!setIsActive);
        setIsActive4(!setIsActive);
    }; 
    const handleClick2 = () => {
        setIsActive2(true);
        setIsActive(!setIsActive2);
        setIsActive3(!setIsActive2);
        setIsActive4(!setIsActive2);
    }; 
    const handleClick3 = () => {
        setIsActive3(true);
        setIsActive2(!setIsActive3);
        setIsActive(!setIsActive3);
        setIsActive4(!setIsActive3);
    }; 
    const handleClick4 = () => {
        setIsActive4(true);
        setIsActive2(!setIsActive4);
        setIsActive3(!setIsActive4);
        setIsActive(!setIsActive4);
    };    

    return (
        <Stack direction="row" spacing={2} sx={ sx }>
            <Button sx={ buttonStyle }
                style={{
                    backgroundColor: isActive ? '#1565c0' : '',
                    color: isActive ? 'white' : '',
                }}
                onClick={handleClick}
                variant="outlined"
            >
                <AttachMoneyIcon fontSize='small' />
            </Button>
            <Button sx={ buttonStyle }
                style={{
                    backgroundColor: isActive2 ? '#1565c0' : '',
                    color: isActive2 ? 'white' : '',
                }}
                onClick={handleClick2}
                variant="outlined"
            >
                <Stack direction="row" spacing={-1.4} >
                    <AttachMoneyIcon fontSize='small' />
                    <AttachMoneyIcon fontSize='small' />
                </Stack>
            </Button>
            <Button sx={ buttonStyle }
                style={{
                    backgroundColor: isActive3 ? '#1565c0' : '',
                    color: isActive3 ? 'white' : '',
                }}
                onClick={handleClick3}
                variant="outlined"
            >
                <Stack direction="row" spacing={-1.4}>
                    <AttachMoneyIcon fontSize='small' />
                    <AttachMoneyIcon fontSize='small' />
                    <AttachMoneyIcon fontSize='small' />
                </Stack>
            </Button>
            <Button sx={ buttonStyle }
                style={{
                    backgroundColor: isActive4 ? '#1565c0' : '',
                    color: isActive4 ? 'white' : '',
                }}
                onClick={handleClick4}
                variant="outlined"
            >
                <Stack direction="row" spacing={-1.4}>
                    <AttachMoneyIcon fontSize='small' />
                    <AttachMoneyIcon fontSize='small' />
                    <AttachMoneyIcon fontSize='small' />
                    <AttachMoneyIcon fontSize='small' />
                </Stack>
            </Button>
        </Stack>
    )
}

export default MainButton