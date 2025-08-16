import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="myxellia">
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          href="/logo.svg"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
