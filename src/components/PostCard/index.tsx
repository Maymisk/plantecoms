import Image from 'next/image';
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
                <Image src={main_picture}>
                    <img alt="Post picture" />
                </Image>
            </main>
            <footer>{description}</footer>
        </Container>
    );
}
