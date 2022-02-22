import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import structured_data from "../public/structured_data.json";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          strategy="afterInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://sgtm.evgenyastapov.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })
    `
          }}
        />
        <Script
          type="application/ld+json"
          onLoad={() => console.log("ld+json loaded")}
          onError={() => console.error("ld+json load failed")}
          id="ld_json_script"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured_data) }}
        />
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Righteous&family=Satisfy&family=Roboto&display=swap&subset=latin"
          rel="stylesheet"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="theme-color" content="#080808" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />

      </Head>

      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
