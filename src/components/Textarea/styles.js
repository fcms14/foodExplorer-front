import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_C4};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_FF};

    resize: none;
    
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_C4};
    }
`;

export const Label = styled.label`
    text-align: left;
    
    color: ${({ theme }) => theme.COLORS.GRAY_C4};
    font-size: 16px;
    font-weight: 400;
    
    width: 100%;
`