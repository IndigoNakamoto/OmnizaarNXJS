import { Html, Head, Main, NextScript } from 'next/document'

//TODO: Download fonts locally and update source. 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300;500&family=Poppins:ital,wght@0,200;0,400;1,200;1,400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}