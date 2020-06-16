import Document, { DocumentContext, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Head from 'next/head';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            <html lang="en">
              <Head>
                <link
                  href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@300;400;500;700;900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                  rel="stylesheet"
                />
              </Head>
              {initialProps.styles}

              {sheet.getStyleElement()}
            </html>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
