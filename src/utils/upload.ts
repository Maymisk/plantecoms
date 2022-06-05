import multer from 'multer';
import { resolve } from 'path';

export const tmpFolder = resolve(process.cwd(), 'tmp');

export const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, tmpFolder);
        },
        filename: (req, file, cb) =>
            cb(null, new Date().getTime() + '-' + file.originalname)
    })
});
