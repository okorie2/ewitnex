import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GoogleOAuthProvider clientId='481886337953-lj4bgiv9lg6bqnbmc5uvnclri1al3kp4.apps.googleusercontent.com'>
        <Provider store={store}>
          <Head>
            <title>Ewitnex</title>
            <meta
              name='description'
              content='Discover local happenings, concerts, weddings, workshops hangouts, and more, all in one place, ensuring you never miss out on the vibrant experiences in your vicinity.'
            />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <link rel='icon' href='/favicon.ico' />

            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/apple-touch-icon.png'
            />
            <link
              rel='icon'
              href='/favicon-32x32.png'
              type='image/png'
              sizes='32x32'
            />
            <link
              rel='icon'
              href='/favicon-16x16.png'
              type='image/png'
              sizes='16x16'
            />
            <link
              rel='icon'
              href='/android-chrome-192x192.png'
              type='image/png'
              sizes='192x192'
            />
            <link
              rel='icon'
              href='/android-chrome-512x512.png'
              type='image/png'
              sizes='512x512'
            />
            <link rel='manifest' href='/site.webmanifest' />
          </Head>
          <Toaster />
          <Component {...pageProps} />
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}
