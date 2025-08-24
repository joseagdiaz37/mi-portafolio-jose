import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Google Fonts: Special Gothic Expanded One */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap" rel="stylesheet" />
        {/* Otros elementos del head que ya tuvieras (meta tags, favicon, etc.) */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}