import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo/carplayservice-logo.svg";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Carplay Service | Website in aanbouw</title>
          <meta name="description" content="Carplay Service - Wij bieden hoogwaardige Carplay-installatie- en integratiediensten. Onze website is momenteel in aanbouw, maar we staan klaar om u te helpen met uw behoeften."/>
          <meta name="og:description" content="Carplay Service - Onze website is in aanbouw, maar we bieden professionele Carplay-installatie en service voor uw voertuig."/>
          <meta name="keywords" content="Carplay, Carplay installatie, auto integratie, Carplay Service, auto technologie"/>
          <meta property="og:url" content="https://www.carplayservice.nl"/>
          <meta property="og:title" content="Carplay Service | Website in aanbouw"/>
          <meta property="og:image" content="/oglogo.png"/>
          <meta property="og:type" content="website"/>
      </Head>

      <div className="aanbouw">
          <Link href="/">
              <Image src={Logo} alt="Logo van Carplay Service"/>
          </Link>
          <h1>Website in aanbouw...</h1>
      </div>
    </>
  );
}
