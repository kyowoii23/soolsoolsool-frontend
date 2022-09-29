import styled from '@emotion/styled';

import ExploreButton from '../Button/ExploreButton';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 20px;
`;

const ExploreSidebar = () => {
    return (
        <>
            <Container>
                <ExploreButton label={'탁 주'} />
                <ExploreButton label={'약 주'} />
                <ExploreButton label={'청 주'} />
            </Container>
            <Container>
                <ExploreButton label={'과실주'} />
                <ExploreButton label={'증류주'} />
                <ExploreButton label={'기타'} />
            </Container>
        </>
    )
}

export default ExploreSidebar