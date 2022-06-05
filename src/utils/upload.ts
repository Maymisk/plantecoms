import multer from 'multer';
import { resolve } from 'path';

export const tmpFolder = resolve(__dirname, '..', 'tmp');

export const upload = multer({
    storage: multer.diskStorage({
        destination: tmpFolder,
        filename: (req, file, cb) =>
            cb(null, new Date().getTime() + '-' + file.originalname)
    })
});
