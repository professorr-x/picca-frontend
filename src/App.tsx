import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import PrayerTiming from "./components/PrayerTiming";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Beleidsplan from "./components/Beleidsplan";
import Contact from "./components/Contact";

/* main app entry */
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <PrayerTiming />
            <About />
          </>
        } />
        <Route path="/beleidsplan" element={<Beleidsplan />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
