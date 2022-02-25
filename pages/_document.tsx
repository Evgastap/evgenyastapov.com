import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <script src="https://cmp.osano.com/16BZEZSDfOgpzwGs/88d34647-c256-4f66-8100-98695949e5ba/osano.js"></script> */}
        <script src="https://sgtm.evgenyastapov.com/gtm.js?id=GTM-K86WSC8" />
        <script
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://sgtm.evgenyastapov.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K86WSC8');
    `,
          }}
        ></script>
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Righteous&family=Satisfy&family=Roboto+Mono&display=swap&subset=latin"
          rel="stylesheet"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="theme-color" content="#080808" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body className="dark:bg-gray-900">
        <noscript>
          <iframe
            src="https://sgtm.evgenyastapov.com/gtm.js?id=GTM-K86WSC8"
            height="0"
            width="0"
            // style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
