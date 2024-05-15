import Benefits from "@/components/benefits";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import JoinTheWeb from "@/components/joinTheWeb";
import MarqueeSlider from "@/components/marquee";
import Navbar from "@/components/navbar";
import WhoWeAre from "@/components/whoweare";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>WebWeavers</title>
      </Head>
      <nav className="mt-[60px]">
        <Navbar></Navbar>
      </nav>
      <section className="mt-[50vw] sm:mt-[60vw] lg:mt-[60vw] 2xl:mt-[20vw]" id="intro">
        <Intro></Intro>
      </section>
      <section className="mt-[40vw] sm:mt-[50vw] lg:mt-[50vw] 2xl:mt-[20vw]">
        <MarqueeSlider></MarqueeSlider>
      </section>
      <section className="mt-[55vw] sm:mt-[55vw] lg:mt-[50vw] 2xl:mt-[25vw]" id="whoweare">
        <WhoWeAre></WhoWeAre>
      </section>
      <section className="mt-[55vw] sm:mt-[55vw] lg:mt-[35vw] 2xl:mt-[25vw]" id="benefits">
        <Benefits></Benefits>
      </section>
      <section className="mt-[55vw] sm:mt-[55vw] lg:mt-[45vw] 2xl:mt-[25vw] " id="jointheweb">
        <JoinTheWeb></JoinTheWeb>
      </section>
      <section className="mt-[55vw] sm:mt-[55vw] lg:mt-[45vw] 2xl:mt-[25vw] mb-[60px]" id="Footer">
        <Footer></Footer>
      </section>
    </div>
  );
}
