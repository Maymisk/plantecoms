import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;

    div {
        width: 100%;
        height: 1rem;

        padding-block: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        background: white;
        color: black;

        border: 0;

        &:first-of-type {
            border-radius: 0.25rem 0.25rem 0 0;
        }

        &:last-of-type {
            border-radius: 0 0 0.25rem 0.25rem;
        }

        & + div {
            border-top: 2px solid rgba(0, 0, 0, 0.1);
        }

        svg {
            width: 20px;
            height: 15px;
        }
    }
`;
