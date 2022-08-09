import styled from 'styled-components'


export const Container = styled.div`
    width: clamp(280px, 100%, 320px);
    min-height: 510px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_0a};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    
    border: none;    
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    text-align: center;

    position: relative;

    > svg {
        position: absolute;
        top: 20px;
        right: 20px;

        width: 25px;
        height: auto;

        cursor: pointer;
    }

    > .favorited{
        color: ${({ theme }) => theme.COLORS.RED_75};
        fill:  ${({ theme }) => theme.COLORS.RED_92};
    }

    img {
        width: clamp(220px, 80%, 320px);
        height: auto;
        margin-top: 20px;
    }
    
    .editable {
        cursor: pointer;
    }

    > h2 {
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.GRAY_E1};
    }

    > p  {
        font-weight: 400;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_C4};
        
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        @supports (-webkit-line-clamp: 2) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    > h1 {
        font-weight: 400;
        font-size: 32px;
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    }

    > footer {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        overflow: hidden;
    }

    > section {
        display: flex;        
        justify-content: space-evenly;
        align-items: center;
        width: 100%;        

        > svg {
            cursor: pointer;
        }

        > button {
            width: 80px;
        }
    }


`;
