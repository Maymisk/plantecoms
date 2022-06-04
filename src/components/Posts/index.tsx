import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { PostCard } from '../PostCard';
import { Container } from './styles';

interface IPost {
    ts: number;

    data: {
        username: string;
        description: string;
        profile_picture: string;
        main_picture: string;
    };
}

export function PostsGrid() {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        api.get('/posts').then(response => {
            setPosts(response.data.data);
        });
    }, []);

    return (
        <Container>
            {posts?.map(post => {
                return (
                    <PostCard
                        key={post.ts}
                        username={post.data.username}
                        description={post.data.description}
                        main_picture={'/uploads/' + post.data.main_picture}
                    />
                );
            })}
        </Container>
    );
}
