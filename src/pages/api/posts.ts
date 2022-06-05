import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { fauna } from '../../services/faunadb';

export default async function getPosts(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const posts = await fauna.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection('posts'))),
                q.Lambda(post => q.Get(post))
            )
        );

        return res.status(200).json(posts);
    } else {
        res.setHeader('Allow', 'GET');
        return res.status(405).end('Method not allowed');
    }
}
