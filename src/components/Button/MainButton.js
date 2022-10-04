import {useState} from 'react';

import './ExploreButton.css'
import SignalWifi1BarIcon from '@mui/icons-material/SignalWifi1Bar';
import SignalWifi2BarIcon from '@mui/icons-material/SignalWifi2Bar';
import SignalWifi3BarIcon from '@mui/icons-material/SignalWifi3Bar';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';

const ExploreButton = () => {

    const [isActive, setIsActive] = useState(true)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)


    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
        setIsActive2(!setIsActive);
        setIsActive3(!setIsActive);
        setIsActive4(!setIsActive);

        // 👇️ or set to true
        setIsActive(true);
    }; 
    const handleClick2 = () => {
        // 👇️ toggle
        setIsActive2(current => !current);
        setIsActive(!setIsActive2);
        setIsActive3(!setIsActive2);
        setIsActive4(!setIsActive2);

        // 👇️ or set to true
        setIsActive2(true);
    }; 
    const handleClick3 = () => {
        // 👇️ toggle
        setIsActive3(current => !current);
        setIsActive2(!setIsActive3);
        setIsActive(!setIsActive3);
        setIsActive4(!setIsActive3);

        // 👇️ or set to true
        setIsActive3(true);
    }; 
    const handleClick4 = () => {
        // 👇️ toggle
        setIsActive4(current => !current);
        setIsActive2(!setIsActive4);
        setIsActive3(!setIsActive4);
        setIsActive(!setIsActive4);

        // 👇️ or set to true
        setIsActive4(true);
    };    

    return (
        <div>
            <button className='button'
                style={{
                    backgroundColor: isActive ? '#1628ba' : '',
                    color: isActive ? 'white' : '',
                }}
                onClick={handleClick}
            >
                <SignalWifi1BarIcon fontSize='small' />
            </button>
            <button className='button'
                style={{
                    backgroundColor: isActive2 ? '#1628ba' : '',
                    color: isActive2 ? 'white' : '',
                }}
                onClick={handleClick2}
            >
                <SignalWifi2BarIcon fontSize='small' />
            </button>
            <button className='button'
                style={{
                    backgroundColor: isActive3 ? '#1628ba' : '',
                    color: isActive3 ? 'white' : '',
                }}
                onClick={handleClick3}
            >
                <SignalWifi3BarIcon fontSize='small' />
            </button>
            <button className='button'
                style={{
                    backgroundColor: isActive4 ? '#1628ba' : '',
                    color: isActive4 ? 'white' : '',
                }}
                onClick={handleClick4}
            >
                <SignalWifi4BarIcon fontSize='small' />
            </button>
        </div>
    )
}

export default ExploreButton