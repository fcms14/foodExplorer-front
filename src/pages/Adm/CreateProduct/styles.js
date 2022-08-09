import styled from 'styled-components'

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
`


export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_FF};
    border-radius: 8px;
    
    width: 100%;
    min-width: 180px;
    margin-top: 8px;

    /* position: relative; */
    /* margin: -124px auto 32px; */
    
    /* > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    } */

    > label {
        /* border: 1px solid red; */
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        /* position: absolute; */
        /* bottom: 7px; */
        /* right: 7px; */

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