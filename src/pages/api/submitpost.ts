import multer from 'multer';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import nc from 'next-connect';
import { fauna } from '../../services/faunadb';
import { query as q } from 'faunadb';
import { deleteFile } from '../../utils/deleteFile';
import { upload, tmpFolder } from '../../utils/upload';
import { S3StorageProvider } from '../../services/StorageService/S3StorageService';
import mime from 'mime';

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

// export default nc({
//     onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
//         console.error(err.stack);
//         res.status(500).end('Something broke!');
//     },
//     onNoMatch: (req, res) => {
//         res.status(404).end('Page is not found');
//     }
// })
//     .post('/api/submitpost', async (request: IRequest, response) => {
//         const session = await getSession({ req: request });
//         const { description } = request.body;
//         const file = request.file.filename;

//         const fileDir = tmpFolder + file;

//         if (!session || !description) {
//             deleteFile(fileDir);
//             return response.status(400).redirect('/');
//         }

//         if (!file) {
//             return response.status(400).redirect('/');
//         }

//         const storageProvider = new S3StorageProvider();

//         const objectUrl = await storageProvider.save(file, 'posts');

//         const username = session.user.email.split('@')[0];

//         try {
//             const object = await fauna.query(
//                 q.Create(q.Collection('posts'), {
//                     data: {
//                         username,
//                         main_picture: objectUrl,
//                         description
//                     }
//                 })
//             );

//             return response.status(201).json(object);
//         } catch (err) {
//             console.log(err);
//             return response
//                 .status(500)
//                 .json({ message: 'Perdoa nois, deu erro' });
//         }
//     });
