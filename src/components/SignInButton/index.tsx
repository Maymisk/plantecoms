import { FiMail, FiX } from 'react-icons/fi';
import { Button } from './styles';
import { signIn, signOut, useSession } from 'next-auth/react';

export function SignInButton() {
    const { data: session } = useSession();

    const username = session?.user.email.split('@')[0];

    return session ? (
        <Button type="button">
            <span>{username}</span>
            <FiX color="#000" onClick={() => signOut()} />
        </Button>
    ) : (
        <Button type="button" onClick={() => signIn('github')}>
            <FiMail color="#dacbb1" />
            Entrar com Email
        </Button>
    );
}
