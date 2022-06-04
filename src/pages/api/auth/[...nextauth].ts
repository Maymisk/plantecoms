import NextAuth, { User, Account, Profile } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';

import EmailProvider from 'next-auth/providers/email';

import { fauna } from '../../../services/faunadb';
import { query as q, Client as FaunaClient } from 'faunadb';
import { FaunaAdapter } from '@next-auth/fauna-adapter';
import { sendMail } from '../../../services/MailService/Nodemailer';

const options = {
    adapter: FaunaAdapter(fauna),
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
            secret: process.env.NEXTAUTH_SECRET,
            sendVerificationRequest({ identifier: email, url }) {
                const { host } = new URL(url);

                sendMail(url, host, email);
            }
        })
    ],

    pages: {
        signIn: '/auth/signIn',
        verifyRequest: '/auth/verify-request'
    }
};

export default function Auth(req: NextApiRequest, res: NextApiResponse) {
    NextAuth(req, res, options);
}
