import React, { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { NextSeo, DefaultSeo } from 'next-seo';
import { ServerStyleSheets } from '@material-ui/styles'
import theme from '../src/utils/theme'

// import SEO from '../next-seo.config';

class _Document extends Document {
  render () {
    return (
      <html lang='en' dir='ltr'>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="manifest" href="/manifest.json" />
          <NextSeo
            openGraph={{
              type: 'website',
              url: 'https://www.example.com/page',
              title: 'Open Graph Title',
              description: 'Open Graph Description',
              images: [
                {
                  url: 'https://www.example.ie/og-image.jpg',
                  width: 800,
                  height: 600,
                  alt: 'Og Image Alt',
                },
                {
                  url: 'https://www.example.ie/og-image-2.jpg',
                  width: 800,
                  height: 600,
                  alt: 'Og Image Alt 2',
                },
              ],
            }}
          />
          {/* <DefaultSeo {...SEO} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

_Document.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: WrappedComponent => props => sheets.collect(<WrappedComponent {...props} />)
  })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: (
      <Fragment>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </Fragment>
    )
  }
}

export default _Document
