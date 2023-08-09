import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header-and-Footer/Header";
import Home from "./Components/Home/Home";
import AboutPage from "./Components/About/AboutPage";
import FAQPage from "./Components/FAQ/FAQPage";
import ContactPage from "./Components/Contact/ContactPage";
import Footer from "./Components/Header-and-Footer/Footer";
import LoginPage from "./Components/Login/LoginPage";
import CreateAccountPage from "./Components/CreateAccount/CreateAccountPage";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/FAQ" element={<FAQPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
