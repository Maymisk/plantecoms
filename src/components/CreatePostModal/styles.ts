import styled from 'styled-components';

export const FileInputContainer = styled.div`
    display: flex;
    justify-content: center;

    input[type='file'] {
        display: none;
    }

    label {
        width: 100%;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: white;
        border-radius: 0.5rem;

        color: black;

        cursor: pointer;

        padding: 0.33rem 1.25rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;
