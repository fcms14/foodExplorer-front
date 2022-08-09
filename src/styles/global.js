import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0%;
        box-sizing: border-box;
    }

    /* html, #root, body{
        min-height: 100%;
        height: 100%;
    } */

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_0F};
        color: ${({ theme }) => theme.COLORS.WHITE_FF};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.WHITE_FF};
    }
    
    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a:hover {
        filter: brightness(0.5);
    }

    button:hover{
        background-color: ${({ theme }) => theme.COLORS.RED_75};
    }
`;