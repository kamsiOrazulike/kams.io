import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kamsi Orazulike</title>
      </Head>
      <div id="home">
        <Hero />
      </div>
    </>
  );
}
