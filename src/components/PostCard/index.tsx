import { Container } from './styles';

interface IProps {
    username: string;
    description: string;
    main_picture: string;
}

export function PostCard({ username, description, main_picture }: IProps) {
    return (
        <Container>
            <header>
                <div>{username}</div>
            </header>
            <main>
                <img src={main_picture} alt="Post picture" />
            </main>
            <footer>{description}</footer>
        </Container>
    );
}
