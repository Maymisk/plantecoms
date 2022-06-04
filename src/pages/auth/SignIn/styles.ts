import styled from 'styled-components';

export const Container = styled.div`
    max-width: 276px;
    height: calc(100vh - 5rem);

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        background-color: var(--brown-500);
        height: 30vh;

        padding: 1rem;

        border-radius: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        input {
            width: 100%;
            height: 3rem;

            padding: 0 1rem;

            border-radius: 0.5rem;
        }

        button {
            width: 100%;

            color: black;
        }
    }
`;
