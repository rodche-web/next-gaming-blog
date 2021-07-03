import Head from 'next/head';

import '../styles/globals.css'
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>Rodwin's Game Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
  </>
}

export default MyApp
