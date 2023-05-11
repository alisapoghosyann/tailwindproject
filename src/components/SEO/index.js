import Head from "next/head";

export default function SEO({ metaData }) {
  return (
    <Head>
      <link rel="shortcut icon" href="favicon.svg" />
      <title>{metaData.title}</title>
    </Head>
  );
}
