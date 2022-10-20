import styled from "styled-components";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NotFoundPage = styled.div`
    width: 100%;
    height: 500px;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    padding-top: 100px;
`

const NotFound = () => {
    return (
        <NotFoundPage>
            <SentimentVeryDissatisfiedIcon fontSize="large" />
            <br />
            Page Not Found.
        </NotFoundPage>
    )
}

export default NotFound;