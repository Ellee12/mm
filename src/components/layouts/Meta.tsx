import Head from 'next/head';
import { useRouter } from 'next/router';


const Meta = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta property="og:title" content="Build Next for Swit" />
        <meta property="og:type" content="application, website" />
        <meta property="og:url" content="https://developers.swit.io/" />
        <meta
          property="og:description"
          content="Developers can customize, extend, and integrate with Swit."
        />
        <meta
          name="description"
          content="Developers can customize, extend, and integrate with Swit."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Swit Developers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          data-faviconshortcut=""
          rel="shortcut icon"
          href={`${router.basePath}/favicon-normal.ico`}
        />
        <link
          data-favicon16=""
          rel="icon"
          href={`${router.basePath}/favicon-16-normal.png`}
          sizes="16x16"
        />
        <link
          data-favicon32=""
          rel="icon"
          href={`${router.basePath}/favicon-32-normal.png`}
          sizes="32x32"
        />
        <link
          data-favicon152=""
          rel="icon"
          href={`${router.basePath}/favicon-152-normal.png`}
          sizes="152x152"
        />
      </Head>
    </>
  );
};

export { Meta };
