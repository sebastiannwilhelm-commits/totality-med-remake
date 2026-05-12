import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { GalleryCTA } from "@/components/GalleryCTA";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Press } from "@/components/Press";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { VideoFeature } from "@/components/VideoFeature";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <VideoFeature />
        <About />
        <Services />
        <WhyUs />
        <Press />
        <GalleryCTA />
      </main>
      <Footer />
    </>
  );
}
