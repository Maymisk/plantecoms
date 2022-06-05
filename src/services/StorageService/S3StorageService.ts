import { upload, tmpFolder } from '../../utils/upload';
import { S3 } from 'aws-sdk';
import mime from 'mime';

import { resolve } from 'path';
import fs from 'fs';

import { tmpdir } from 'os';

export class S3StorageProvider {
    private client: S3;

    constructor() {
        this.client = new S3({
            region: process.env.AWS_BUCKET_REGION
        });
    }

    async save(file: string, folder: string) {
        const fileDir = resolve(tmpFolder, file);

        const fileContent = await fs.promises.readFile(fileDir);

        const ContentType = mime.getType(fileDir);

        await this.client
            .putObject({
                Bucket: `${process.env.AWS_BUCKET}/${folder}`,
                Key: file,
                ACL: 'public-read',
                Body: fileContent,
                ContentType
            })
            .promise();

        const objectUrl = process.env.AWS_URL + '/posts/' + file;

        return objectUrl;
    }

    async delete(file: string, folder: string): Promise<void> {
        await this.client
            .deleteObject({
                Bucket: `${process.env.AWS_BUCKET}/${folder}`,
                Key: file
            })
            .promise();
    }
}
