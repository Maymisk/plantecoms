import styled from 'styled-components';

export const HeaderTag = styled.header`
    height: 5rem;

    padding: 0 1rem;

    background: var(--brown-50);

    border-bottom: 3px solid var(--brown-500);

    div {
        height: 100%;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        color: black;

        section a {
            display: flex;
            align-items: center;
            justify-items: center;

            color: black;

            h1 {
                font-size: 2rem;
            }

            img {
                height: 4.5rem;
                width: 50px;

                clip-path: polygon(61% 0, 100% 0%, 100% 100%, 61% 100%);

                position: relative;
                left: -5rem;
            }
        }

        nav {
            height: 5rem;

            margin-left: auto;

            padding: 0 0.5rem;
        }

        button {
            &:nth-of-type(1) {
                display: none;
            }
        }

        @media (max-width: 821px) {
            button:nth-of-type(1) {
                display: block;
            }

            nav {
                display: none;
            }

            section a {
                min-width: 0;

                h1 {
                    font-size: 1rem;
                }
            }
        }

        @media (max-width: 400px) {
            button:nth-of-type(2) {
                font-size: 0.8rem;
            }
        }

        @media (max-width: 300px) {
            button:nth-of-type(2) {
                min-width: 0;
            }
        }
    }
`;

export const Tab = styled.a`
    height: 5rem;
    line-height: 5rem;

    font-size: 1.5rem;
    text-align: center;

    display: inline-block;
    position: relative;

    background: transparent;
    color: black;

    font-weight: 500;

    cursor: pointer;

    & + a {
        margin-left: 2rem;
    }

    &.active {
        font-weight: 700;

        &::after {
            content: '';

            width: 100%;
            height: 3px;

            position: absolute;
            bottom: 1px;
            left: 0;

            background: var(--brown-500);
            border-radius: 0.25rem 0.25rem 0 0;
        }
    }
`;
