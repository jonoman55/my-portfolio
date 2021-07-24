import Head from 'next/head';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JC Dev Portfolio</title>
        <meta
          name='description'
          content='Browse my top websites and contact me directly.'
        />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
};