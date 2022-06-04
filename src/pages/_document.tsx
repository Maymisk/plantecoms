import Document, { Head, Html, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="shortcut icon"
                        href="/images/tree.svg"
                        type="image/svg"
                    />
                    <title>Plante com S</title>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
