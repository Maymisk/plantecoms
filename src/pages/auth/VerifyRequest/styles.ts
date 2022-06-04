import styled from 'styled-components';

export const Container = styled.div`
    max-width: 276px;

    height: calc(100vh - 5rem);

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
        padding: 0.5rem;

        background: var(--brown-500);

        border-radius: 0.5rem;

        p {
            text-align: center;

            & + p {
                margin-top: 2rem;
            }

            &:first-child {
                font-weight: bold;
                font-size: 1.5rem;
            }

            &:nth-child(2) {
                font-size: 0.8rem;
            }

            &:last-child {
                font-size: 1.5rem;
                font-weight: bolder;
            }
        }
    }
`;
