import React from "react";
import Head from "next/head";

import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

const work = () => {
  return (
    <div>
      <Head>
        <title>Photography - Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="My Work" message="This is some of my recent work traveling the world." />

      <Portfolio />
    </div>
  );
}

export default work;
