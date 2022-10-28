import React from "react";
import Head from "next/head";

import meta from "../../data/meta.json";

type MetaType = {
  title: string;
};

const Meta: React.FC<MetaType> = ({ title }) => {
  return (
    <Head>
      <title>{`${title}${meta.titleSuffix}`}</title>
      <meta name="description" content={meta.description} />
      <link rel="icon" href="/favicon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ethswarm.org/" />
      <meta property="og:title" content={title} key="og_title" />
      <meta
        property="og:description"
        content={meta.social.description}
        key="og_description"
      />
      <meta property="og:image" content={meta.social.image} key="og_image" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.ethswarm.org/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={meta.social.description} />
      <meta property="twitter:image" content={meta.social.image} />
    </Head>
  );
};

export default Meta;
