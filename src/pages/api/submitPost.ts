import multer from 'multer';
import { join } from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import nc from 'next-connect';
import { fauna } from '../../services/faunadb';
import { query as q } from 'faunadb';
import { deleteFile } from '../../utils/deleteFile';

interface IRequest extends NextApiRequest {
    file: any;
}

const upload = multer({
    storage: multer.diskStorage({
        destination: join(process.cwd(), 'tmp'),
        filename: (req, file, cb) =>
            cb(null, new Date().getTime() + '-' + file.originalname)
    })
});

const handler = nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end('Alguma coisa quebrou!');
    },
    onNoMatch: (req, res) => {
        res.status(404).end('Página não encontrada');
    }
});

handler.post(async (request: IRequest, response) => {
    // const session = await getSession({ req: request });
    // const { description } = request.body;
    // const file = request.file;

    // if (!session || !description) {
    //     deleteFile(join(process.cwd(), 'tmp', file.filename));
    //     return response.status(400).redirect('/');
    // }

    // if (!file) {
    //     return response.status(400).redirect('/');
    // }

    // const username = session.user.email.split('@')[0];

    // try {
    //     const object = await fauna.query(
    //         q.Create(q.Collection('posts'), {
    //             data: {
    //                 username,
    //                 main_picture: file.filename,
    //                 description
    //             }
    //         })
    //     );

    //     return response.status(201).json(object);
    // } catch (err) {
    //     console.log(err);
    //     return response.status(500).json({ message: 'Perdoa nois, deu erro' });
    // }

    console.log('alo');
    return response.status(200).end();
});

// export const config = {
//     api: {
//         bodyParser: false
//     }
// };

export default async function test(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send({ message: 'everything worked!' });
}
