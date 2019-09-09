import { Global, css } from '@emotion/core'
import Head from 'next/head'

const GlobalStyles = () => (
  <>
    <Head>
        <link href="https://fonts.googleapis.com/css?family=Gaegu:400,700&display=swap" rel="stylesheet" />
    </Head>
    <Global
      styles={css`
        html, body {
          font-family: 'Gaegu', cursive;
          margin: 0;
          padding: 0;
        }
      `}
    />
  </>
)

export default GlobalStyles;
