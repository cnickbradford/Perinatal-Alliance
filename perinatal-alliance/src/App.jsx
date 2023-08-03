import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header-and-Footer/Header";
import Home from "./Components/Home/Home";
import AboutPage from "./Components/About/AboutPage";
import FAQPage from "./Components/FAQ/FAQPage";
import ContactPage from "./Components/Contact/ContactPage";
import Footer from "./Components/Header-and-Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <div>
          <Header />
        </div>
        <div className="body">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/FAQ" element={<FAQPage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
