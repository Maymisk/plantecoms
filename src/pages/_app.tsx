import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
    return (
        <NextAuthProvider session={pageProps.session}>
            <Header />
            <Component {...pageProps} />
            <GlobalStyle />
        </NextAuthProvider>
    );
}

export default MyApp;
