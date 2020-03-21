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
          font-family: Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        a:link, a:visited{
          color: #8dc63f;
        }
        a:active, a:hover{
          color: #8dc63f;
          text-decoration: none;
        }
        img{
          margin: 0;
          padding: 0;
        }
        .clearfix::after {
          content: "";
          clear: both;
          display: table;
        }
      `}
    />
  </>
)

export default GlobalStyles;
