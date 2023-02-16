import Head from "next/head";

import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heading="Captur Photography" message="I capture moments in nature and keep them alive." />

      <Slider slides={SliderData} />
    </>
  );
}
