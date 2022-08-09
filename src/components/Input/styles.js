import styled from 'styled-components'

export const Container = styled.div`    
    width: 100%;
    /* display: flex;
    align-items: center; */

    text-align: left;

    color: ${({ theme }) => theme.COLORS.GRAY_C4};
    font-size: 16px;
    font-weight: 400;
    position: relative;

    > svg {
        position: absolute;
        right: 16px;
        top: 22px;
    }

    > input {
        width: 100%;
        margin-top: 8px;
        
        height: 48px;        
        padding: 14px;

        color: ${({ theme }) => theme.COLORS.GRAY_C4};
        background: transparent;
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE_FF};
        border-radius: 5px;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_7C};
        }
    }
`;
