// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="algolia-domain-verification" content="FF14F5E36F82A306" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
