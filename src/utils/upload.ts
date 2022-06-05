import multer from 'multer';
import { join } from 'path';

const upload = multer({
    storage: multer.diskStorage({
        destination: join(process.cwd(), 'tmp'),
        filename: (req, file, cb) =>
            cb(null, new Date().getTime() + '-' + file.originalname)
    })
});

export default upload.single('file');
