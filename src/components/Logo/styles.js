import styled from 'styled-components';

export const Container = styled.div`

    font-size: 42px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE_FF};

    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-wrap: wrap; */
    width: 350px;
    gap: 19px;

    img {
        width: 42px;
    }
    
`;