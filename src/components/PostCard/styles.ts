import styled from 'styled-components';

export const Container = styled.div`
    width: fit-content;
    min-width: 0;

    border: 1px solid black;
    border-radius: 1rem;

    box-shadow: var(--shadow1);
    background: #faf6d4;
    color: black;

    transition: transform 0.5s;

    &:hover {
        transform: scale(1.01);
    }

    header {
        padding: 0.5rem 0.8rem;
    }

    main {
        border: 1px solid var(--brown-500);
        border-radius: 0 0 0.25rem 0.25rem;

        display: flex;
        align-items: center;

        img {
            max-width: 100%;

            border-radius: 0.25rem;
        }
    }

    footer {
        padding: 1rem;

        display: flex;
        justify-content: left;
        align-items: center;

        font-size: 0.75rem;
    }

    @media (max-width: 400px) {
        header {
            font-size: 3vw;

            img {
                width: 8vw;
                height: 8vw;
            }
        }
    }
`;
