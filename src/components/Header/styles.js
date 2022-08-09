import styled from 'styled-components'

export const Container = styled.div`    
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1A};

    min-height: 104px;
    padding: 20px;

    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1360px;
    height: 100%;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;    
    flex-wrap: nowrap;
    gap: 40px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1A};

    @media only screen and (max-width: 980px) {
        flex-wrap: wrap;
    }
`;

export const User = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    gap: 10px;   
    width: 100%;

    > section {        
        display: flex;
        flex-direction: column;
        align-self: center;
        text-align: left;
        gap: 8px;
    }

    span {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    strong {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        display: flex;
        flex-direction: row;
        align-self: center;

        gap: 10px;
        text-align: left;

        > svg {
            width: 20px;
            height: 20px;
        }
    }

    > .buttonHeader{
            width: 200px;
        }
`;

export const Search = styled.div`
    width: 100%;
`

export const Favorites = styled.div`
    white-space: nowrap;
`;

export const Logo = styled.div`
    white-space: nowrap;

    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE_FF};

    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 24px;
    }
    
`;