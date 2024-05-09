import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home/Home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fi Rasel - MERN Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Vkcollin" />
        <meta
          name="keywords"
          content="Vkcollin portfolio"
        />
        <meta
          name="description"
          content="Hi, I'm Vkcollin, A Programmer and RDM CREW leader"
        />
        <meta property="og:title" content="Vkcollin - RDM CREW leader" />
        <meta
          property="og:description"
          content="Hi, I'm Vkcollin, A Programmer and RDM CREW leader"
        />
        <meta property="og:image" content="https://i.ibb.co/2SDhrHX/og.png" />
        <meta property="og:url" content="https://terminal.firasel.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vkcollin - RDM CREW leader" />
        <meta name="twitter:url" content="https://terminal.firasel.com/" />
        <meta
          name="twitter:description"
          content="Hi, I'm Vkcollin, A Programmer and RDM CREW leader"
        />
        <meta name="twitter:image" content="https://i.ibb.co/2SDhrHX/og.png" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default HomePage;
