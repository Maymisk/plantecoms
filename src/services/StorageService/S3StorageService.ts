import { upload, tmpFolder } from '../../utils/upload';
import AWS from 'aws-sdk';
import mime from 'mime';

import { resolve } from 'path';
import fs from 'fs';

export class S3StorageProvider {
    private client: AWS.S3;

    constructor() {
        const credentials = new AWS.Credentials({
            accessKeyId: process.env.AWSACCESS_KEY,
            secretAccessKey: process.env.AWSSECRET_KEY
        });

        this.client = new AWS.S3({
            region: process.env.AWS_BUCKET_REGION,
            credentials
        });
    }

    async getPutObjectSignedUrl(params: any) {
        return await this.client.getSignedUrlPromise('putObject', params);
    }

    // async save(file: string, folder: string) {
    //     const fileDir = resolve(tmpFolder, file);

    //     const fileContent = await fs.promises.readFile(fileDir);

    //     const ContentType = mime.getType(fileDir);

    //     await this.client
    //         .putObject({
    //             Bucket: `${process.env.AWS_BUCKET}/${folder}`,
    //             Key: file,
    //             ACL: 'public-read',
    //             Body: fileContent,
    //             ContentType
    //         })
    //         .promise();

    //     const objectUrl = process.env.AWS_URL + '/posts/' + file;

    //     return objectUrl;
    // }

    // async delete(file: string, folder: string): Promise<void> {
    //     await this.client
    //         .deleteObject({
    //             Bucket: `${process.env.AWS_BUCKET}/${folder}`,
    //             Key: file
    //         })
    //         .promise();
    // }
}
