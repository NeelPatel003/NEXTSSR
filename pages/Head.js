import React from "react";
import Head from 'next/head';
const HeadComponent = ({ title, desc, author }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default HeadComponent;
