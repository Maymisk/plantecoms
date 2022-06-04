import styled from 'styled-components';

export const Main = styled.main`
    height: calc(100vh - 5rem);
    max-width: 1120px;

    margin: 0 auto;

    border-radius: 1rem;

    text-align: center;

    font-weight: 500;

    padding: 1rem;

    section {
        color: white;

        padding: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        p:last-of-type {
            font-weight: 900;
        }
    }

    button {
        color: black;
    }
`;
