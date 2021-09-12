import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Gochi+Hand&display=swap" rel="stylesheet"></link>
        </Head>
        <body className="bg-fixed text-sm bg-gradient-to-r from-red-500 to-blue-500  dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html >
    );
  }
}

export default MyDocument;
