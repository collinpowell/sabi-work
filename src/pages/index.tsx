import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Items from "@/components/Items";
import Benefits from "@/components/Benefits";
import Download from "@/components/Download";
import FAQ from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <About/>
      <Items/>
      <Benefits/>
      <Download/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
