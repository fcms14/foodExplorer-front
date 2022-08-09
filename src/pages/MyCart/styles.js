import styled from 'styled-components'

export const Hero = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1360px;
    padding: 20px;
    
    min-height: 100vh;    
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;    
    flex-wrap: wrap;

    gap: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_C4};

    > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        gap: 50px 0;

        @media only screen and (max-width: 1005px) {
            justify-content: space-around;
        }
    }

`;

export const Billing = styled.div`
    width: clamp(280px, 100%, 480px);
    padding: 10px;

    display: flex;
    flex-direction: column;    
    gap: 20px;

    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_E1};
    font-weight: 500;
`;


export const Checkout = styled.div`
    width: clamp(280px, 100%, 480px);
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .wrapper{
        border: 3px solid ${({ theme }) => theme.COLORS.BORDER};
        border-radius: 8px;
    }

    .collumns {
        display: flex;
        width: 100%;

        .paymentMethod{
            width: 100%;
            border: 1px solid ${({ theme }) => theme.COLORS.BORDER};

            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.WHITE_FF};
            font-weight: 400;
            
            padding: 20px;
            cursor: pointer;
        }
    }

    .paymentOption{
        display: flex;
        flex-direction: column;
        gap: 35px;
        padding: 20px;
        align-items: center;

        > img {
            margin: 7%;
            width: 50%;
            height: auto;
        }
    }

    .displayNone{
        display: none;
    }    

    .displayBackground{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1B};
    }
`

export const CartItens = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    > img {
        width: clamp(80px, 10%, 100px);
        padding: 8px;
    }

    > div {
            display: flex;
            flex-direction: column;
            gap: 10px;

        > p {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_E1};
            font-weight: 500;

            > span{
                font-size: 12px;
                color: ${({ theme }) => theme.COLORS.GRAY_C4};
                font-weight: 400;
            }
        }

        > span {
            font-size: 12px;
            color: ${({ theme }) => theme.COLORS.RED_55};
            font-weight: 400;
            cursor: pointer;
        }

    }
`;



export const Section2Columns = styled.section`
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap ;

    width: 100%;
    border-radius: 8px;

    gap: 10px;

    @media only screen and (max-width: 780px) {
        flex-wrap: wrap;
    }

`;