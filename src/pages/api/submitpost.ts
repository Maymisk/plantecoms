import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { fauna } from '../../services/faunadb';
import { S3StorageProvider } from '../../services/StorageService/S3StorageService';

export default async function submitPost(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method != 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, type, description } = req.body;
        const session = await getSession({ req });

        if (!(name && type && description && session)) {
            return res.status(400).json({ message: 'Incomplete request body' });
        }

        const s3Params = {
            Bucket: `${process.env.AWS_BUCKET}/posts`,
            Key: name,
            ACL: 'public-read',
            Expires: 60,
            ContentType: type
        };

        const s3 = new S3StorageProvider();
        const url = await s3.getPutObjectSignedUrl(s3Params);

        const username = session.user.email.split('@')[0];

        await fauna.query(
            q.Create(q.Collection('posts'), {
                data: {
                    username,
                    main_picture: process.env.AWS_URL + '/posts/' + name,
                    description
                }
            })
        );

        return res.json({ url });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
}
