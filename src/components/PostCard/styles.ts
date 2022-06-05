import styled from 'styled-components';

export const Container = styled.div`
    width: fit-content;
    min-width: 0;

    border: 1px solid black;
    border-radius: 1rem;

    padding: 1rem;

    box-shadow: var(--shadow1);
    background: #faf6d4;
    color: black;

    transition: transform 0.5s;

    &:hover {
        transform: scale(1.01);
    }

    header {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 1rem;

        padding: 0.2rem;

        margin-bottom: 0.2rem;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;

            border: 2px solid black;
        }
    }

    main {
        padding: 0.2rem;

        border-top: 1px solid var(--brown-500);
        border-bottom: 1px solid var(--brown-500);

        display: flex;
        align-items: center;

        img {
            max-width: 100%;

            border-radius: 0.25rem;
        }
    }

    footer {
        margin-top: 0.2rem;

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
