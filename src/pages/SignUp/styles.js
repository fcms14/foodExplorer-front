import styled from 'styled-components'

export const Hero = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1360px;
    
    min-height: 100vh;    
    
    display: flex;
    align-items: center;
    align-content: center;    
    flex-wrap: wrap;
    justify-content: space-around;

    gap: 20px;
`;


export const Container = styled.div`
    width: clamp(300px, 80vw, 480px);
    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_19};

    color: ${({ theme }) => theme.COLORS.WHITE_FF};
    font-size: 32px;
    font-weight: 500;    

    padding: clamp(10px, 7%, 64px);

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    margin-bottom: 8px;

    > a {
        font-size: 14px;
    }
`;

