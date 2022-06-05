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

export default nc<NextApiRequest, NextApiResponse>().post(
    '/api/submitpost',
    async (request: IRequest, response) => {
        console.log(request.body);
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
        //                 main_picture: join(process.cwd(), 'tmp', file.filename),
        //                 description
        //             }
        //         })
        //     );

        //     return response.status(201).json(object);
        // } catch (err) {
        //     console.log(err);
        //     return response.status(500).json({ message: 'Perdoa nois, deu erro' });
        // }
    }
);

export const config = {
    api: {
        bodyParser: false
    }
};
