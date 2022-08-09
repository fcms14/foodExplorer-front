import styled from 'styled-components'

export const Container = styled.button`    
    width: 100%;
    border: none;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.RED_92};
    color: ${({ theme }) => theme.COLORS.WHITE_FF};

    font-size: 14px;
    font-weight: 400;
    padding: 12px;
`;
