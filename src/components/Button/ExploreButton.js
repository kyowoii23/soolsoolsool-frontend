import {useState} from 'react';

import './ExploreButton.css'


const ExploreButton = (props) => {
    const { label } = props

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);

        // 👇️ or set to true
        // setIsActive(true);
    };

    return (
        <div>
            <button className='button'
                style={{
                    backgroundColor: isActive ? 'brown' : '',
                    color: isActive ? 'white' : '',
                }}
                onClick={handleClick}
            >
                {label}
            </button>
        </div>
    )
}

export default ExploreButton