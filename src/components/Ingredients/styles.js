import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_7C};
    color: ${({ theme, isNew }) => theme.COLORS.WHITE_FF};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_7C}` : "none"} ;

    border-radius: 10px;
    padding-right: 8px;

    width: 19%;
    min-width: 220px;

    
    > input {
        height: 56px;
        width: 100%;
        
        padding: 12px;
        color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_C4 : theme.COLORS.BACKGROUND_0F};
        background: transparent;
        
        border: none;
        cursor: pointer;

        &::placeholder{
            color: ${({ theme, isNew }) => theme.COLORS.GRAY_7C};
        }

    }
    > button {        
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme, isNew }) => theme.COLORS.BACKGROUND_0F};
    }

    .button-add {
        color: ${({ theme, isNew }) => theme.COLORS.GRAY_7C};
    }

`;
