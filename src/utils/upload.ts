import multer from 'multer';
import { resolve } from 'path';
import { tmpdir } from 'os';

export const tmpFolder = tmpdir();

export const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, tmpFolder);
        },
        filename: (req, file, cb) =>
            cb(null, new Date().getTime() + '-' + file.originalname)
    })
});
