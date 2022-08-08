import Navbar from "../Parts/HomePage/Navbar";
import Hero from "../Parts/HomePage/Hero";
import Title from "../Parts/HomePage/Title";
import Info from "../Parts/HomePage/Info";
import Gate from "../components/Gate";
import About from "../Parts/HomePage/About";
import Footer from "../Parts/HomePage/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gate />
      <Title />
      <Info />
      <About />
      <Gate />
      <Footer />
    </>
  );
}
