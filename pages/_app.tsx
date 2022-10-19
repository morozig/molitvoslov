import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <title>
          Молитвослов
        </title>
        <meta
          name='description'
          content='Православный молитвослов для новоначальных с
            параллельным переводом'
        />
        <meta
          property='og:image'
          content='/molitvoslov/banner.jpg'
        />
        <meta
          property='og:description'
          content='Православный молитвослов для новоначальных с
            параллельным переводом'
        />
        <meta
          property='og:title'
          content='Молитвослов'
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/molitvoslov/apple-touch-icon.png"></link>
      </Head>
      <CssBaseline/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
