import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Setup Brand Voice - Let Keoni Generate</title>
        <meta
          name="description"
          content="Generate your brand voice with Keoni. Keoni is an AI company that uses natural language processing to create a brand voice from your existing brand guidelines."
        />
        <meta property="og:image" content="https://keoni-ai-interview.vercel.app/assets/icons/default-avatar/avatar-7.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://keoni-ai-interview.vercel.app/assets/icons/default-avatar/avatar-7.svg" />
        <meta name="twitter:image:alt" content="Keoni" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/icons/default-avatar/avatar-7.svg" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

