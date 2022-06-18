import React from "react";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Jewerly from "./pages/Jewelry";
import Team from "./pages/Team";
import Locate from "./pages/Locate";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";

// App is our top-level main component that references other components
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/jewelry" element={<Jewerly />} />
        <Route path="/team" element={<Team />} />
        <Route path="/locate" element={<Locate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
