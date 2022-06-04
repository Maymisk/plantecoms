import styled from 'styled-components';

export const Button = styled.button`
    height: 3rem;

    border: 0;
    border-radius: 3rem;

    padding: 0 1.5rem;

    background: var(--brown-500);
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-weight: bold;

    svg,
    img {
        width: 20px;
        height: 20px;
    }

    img {
        border-radius: 50%;
    }

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
`;
