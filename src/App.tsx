import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Beleidsplan from "./components/Beleidsplan";

/* main app entry */
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
          </>
        } />
        <Route path="/beleidsplan" element={<Beleidsplan />} />
      </Routes>
      <Footer />
    </Router>
  );
}
