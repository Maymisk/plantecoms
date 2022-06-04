import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        --bg: #1d1f1b;

        --brown-50: #ede9c2;
        --brown-300: #7c7c7c;
        --brown-500: #9e8252;
        --brown-600: #9e8252;

        --shadow1: -4px 5px 15px -3px #000000;
        --shadow2: 4px 5px 15px -3px #000000;
        --shadow3: -4px 5px 15px 3px #000000;
    }

    body {
        min-height: 100vh;
        
        background: var(--bg);
        color: white;
    }

    body, input, textarea, button {
        border: 0;

        font-family: 'Poppins', sans-serif;

    }

    a {
        text-decoration: none;
        
    }

    html {

        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    button {
        height: 3rem;

        border: 0;
        border-radius: 3rem;

        padding: 0 1.5rem;

        background: azure   ;
        color: var(--white);

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        cursor: pointer;

        font-weight: 500;

        svg {
            width: 20px;
            height: 20px;
        }

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
        }

    .react-modal-content {
        width: 100%;

        border-radius: 0.5rem;

        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            gap: 0.5rem;

            div {
                width: 100%;

                padding: 1rem;


                input {
                    width: 100%;
                    height: 3rem;
    
                    margin-top: 0.25rem;

                    border-radius: 1rem;


                    padding: 0 1rem;
                }
            }
        }

        max-width: 576px;

        background: var(--brown-600);
        position: relative;

        padding: 3rem;
    }

    .react-modal-overlay {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background: rgb(0, 0, 0, 0.5);

        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .react-modal-close {
        position: absolute;
        top: 0;
        right: 0;
        border: 0;

        background: transparent;
       
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }

    }

    .nav-menu-modal-content {
        width: 7rem;
        background-color: white;

        display: flex;
        justify-content: center;
        align-items: center;
        
        position: absolute;
        top: 4rem;
        right: 14.5rem;

        border-radius: 0.5rem;
    }

    .nav-menu-modal-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0rem;

        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    };
    
    .loading {
        animation: spin 1s ease-out infinite;
    }
`;
