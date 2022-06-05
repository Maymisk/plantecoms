import multer from 'multer';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import nc from 'next-connect';
import { fauna } from '../../services/faunadb';
import { query as q } from 'faunadb';
import { deleteFile } from '../../utils/deleteFile';
import { upload } from '../../utils/upload';

interface IRequest extends NextApiRequest {
    file: any;
}

function runMiddleware(
    req: NextApiRequest & { [key: string]: any },
    res: NextApiResponse,
    fn: (...args: any[]) => void
): Promise<any> {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
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
//     .use(upload)
//     .post('/api/submitpost', async (request: IRequest, response) => {
//         const session = await getSession({ req: request });
//         const { description } = request.body;
//         const file = request.file;

//         if (!session || !description) {
//             deleteFile(join(process.cwd(), 'tmp', file.filename));
//             return response.status(400).redirect('/');
//         }

//         if (!file) {
//             return response.status(400).redirect('/');
//         }

//         const username = session.user.email.split('@')[0];

//         try {
//             const object = await fauna.query(
//                 q.Create(q.Collection('posts'), {
//                     data: {
//                         username,
//                         main_picture: join(process.cwd(), 'tmp', file.filename),
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

const handler = async (
    req: NextApiRequest & { [key: string]: any },
    res: NextApiResponse
) => {
    await runMiddleware(req, res, upload.single('file'));

    const session = await getSession({ req });
    const { description } = req.body;
    const file = req.file;

    if (!session || !description) {
        deleteFile(join(process.cwd(), 'tmp', file.filename));
        return res.status(400).redirect('/');
    }

    if (!file) {
        return res.status(400).redirect('/');
    }

    const username = session.user.email.split('@')[0];

    try {
        const object = await fauna.query(
            q.Create(q.Collection('posts'), {
                data: {
                    username,
                    main_picture: join(process.cwd(), 'tmp', file.filename),
                    description
                }
            })
        );

        return res.status(201).json(object);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Perdoa nois, deu erro' });
    }
};

export default handler;

export const config = {
    api: {
        bodyParser: false
    }
};
