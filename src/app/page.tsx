import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Picks from "@/components/Picks";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import DealOfWeek from "@/components/DealOfWeek";
import Grow from "@/components/Grow";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <span id="top" />
      <main>
        <Hero />
        <LogoBar />
        <Services />
        <Stats />
        <Picks />
        <HowItWorks />
        <Categories />
        <DealOfWeek />
        <Grow />
        <Testimonials />
        <Newsletter />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
