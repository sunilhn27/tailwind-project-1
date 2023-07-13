import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Info from "@/components/Info";
import Chart from "@/components/Chart";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Cards />
      <Chart />
      <Cta />
      <Footer />
    </>
  )
}
