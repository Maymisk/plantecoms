import AWS from 'aws-sdk';

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
}
