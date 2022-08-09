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


    > table{
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.BORDER};
        border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
        border-radius: 8px 8px 0 0;
    }

    > table th, table td {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_0F};
        border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
        padding: 20px;        
    }

    > table th:first-child{
        border-radius: 8px 0px 0px 0px;
    }
    > table th:last-child{
        border-radius: 0px 8px 0px 0px;
    }

    > table select {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_0F};
        color: ${({ theme }) => theme.COLORS.WHITE_FF};
        border: none;
        padding: 15px 5px 15px 15px;
    }

    .Pendente {
        border-left: 4px solid ${({ theme }) => theme.COLORS.RED_92};
    }

    .Preparando {
        border-left: 4px solid orange;
    }

    .Enviado {
        border-left: 4px solid green;
    }

`;
