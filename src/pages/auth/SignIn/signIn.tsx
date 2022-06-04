import { getCsrfToken } from 'next-auth/react';
import { Container } from './styles';

export default function SignIn({ csrfToken }) {
    return (
        <Container>
            <form action="/api/auth/signin/email" method="POST">
                <input
                    type="hidden"
                    name="csrfToken"
                    defaultValue={csrfToken}
                />

                <label>
                    Endereço de email
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@exemplo.com"
                        required
                    />
                </label>
                <button type="submit">Entrar com email</button>
            </form>
        </Container>
    );
}

export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context);
    return {
        props: { csrfToken }
    };
}
