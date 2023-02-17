import React from "react";
import Head from "next/head";

import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Photography - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Contact" message="Submit the form below for more work and quotes." />

      <Contact />
    </div>
  );
}

export default contact;
