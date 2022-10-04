import styled from '@emotion/styled';

import ExploreButton from '../Button/ExploreButton';


const Body = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 1em 0;
`;

const ExploreSidebar = () => {
    return (
        <>
            <Body>
                <ExploreButton label={'탁 주'} />
                <ExploreButton label={'약 주'} />
                <ExploreButton label={'청 주'} />
            </Body>
            <Body>
                <ExploreButton label={'과실주'} />
                <ExploreButton label={'증류주'} />
                <ExploreButton label={'기타'} />
            </Body>
        </>
    )
}

export default ExploreSidebar