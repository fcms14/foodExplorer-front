import styled from 'styled-components';

export const Hero = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1360px;
    padding: 20px;
    
    min-height: 100vh;    
    
    display: flex;
    align-items: center;
    align-content: flex-start;    
    flex-wrap: wrap;

    gap: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_C4};

    >h1{
        width: 100%;
    }

    @media only screen and (max-width: 780px) {
        justify-content: center;
        > h1 {
            text-align: center;
        }
    }
`;

export const Banner = styled.section`
    display: flex;
    align-items: flex-end;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_25};

    width: 100%;
    margin-top: 10%;
    height: 260px;
    border-radius: 8px;
    padding: 8px;

    gap: 10px;

    > img {
        width: clamp(280px, 50%, 630px);
    }

    > div { 
        height: 100%;

        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;

        > h1{
            font-size: clamp(20px, 18px + 2vw, 40px);
            font-weight: 500;
        }
    }

    @media only screen and (max-width: 780px) {
        flex-wrap: wrap;
        height: auto;
        justify-content: center;

        > div {
            max-width: 320px;
        }
    }
`;

export const Section2Columns = styled.section`
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap ;

    width: 100%;
    border-radius: 8px;
    padding: 8px;

    gap: 10px;

    @media only screen and (max-width: 780px) {
        flex-wrap: wrap;
    }
`;

export const Section = styled.section`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_FF};
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-wrap: wrap ;
    gap: 10px;
`;

export const Column2 = styled.div`
    min-width: 180px;
    color: ${({ theme }) => theme.COLORS.GRAY_C4};
    width: 25%;
`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_FF};
    border-radius: 8px;
    
    width: 100%;
    min-width: 180px;
    margin-top: 8px;

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        input {
            border: 1px solid red;
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};            
        }
    }
`;