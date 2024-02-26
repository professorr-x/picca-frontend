import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import ANBI from "./components/ANBI";
// import Pricing from "./components/Pricing";
// import Support from "./components/Support";

/* main app entry */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <ANBI/> */}
      {/* <Support /> */}
      {/* <Platform /> */}
      {/* <Pricing /> */}
      <Footer />
    </>
  );
}
