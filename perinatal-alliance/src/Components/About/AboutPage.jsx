import React from "react";
import "./AboutPage.css";
import ultrasound from "../../images/ultrasound.jpg";
import labcoat from "../../images/labcoat-on-chair.jpg";
import Footer from "../Header-and-Footer/Footer";

const AboutPage = () => {
  return ( 
  <>
  <div className="aboutpage-container">
  <h1 className="aboutpage-title">About us</h1>
  <img src={ultrasound} alt="Ultrasound.jpg" className="aboutpage-img" />
  <div className="aboutpage-content-container">
    <h4 className="aboutpage-content-title">Our mission</h4>
    <p className="aboutpage-content-text">
      <span>
      At Perinatal Alliance, we are committed to advancing the field of maternal fetal medicine and enhancing the care we provide to expectant mothers. With cutting-edge technology and a dedication to excellence, we are proud to announce the launch of our Telehealth Maternal Fetal Medicine Services, a convenient and comprehensive approach to support obstetricians and revolutionize patient care.
      </span>
    </p>
    <p className="aboutpage-content-text">
      <span>
      Telehealth has rapidly become an integral part of modern healthcare, and we understand its immense potential to transform the way we manage maternal fetal medicine. Through our secure and user-friendly platform, we are bringing together expectant mothers, obstetricians, and our team of highly skilled maternal fetal medicine specialists in a seamless virtual environment.
      </span>
    </p>
  </div>
    <Footer/>
  </div> 
  </>
  )
}

export default AboutPage;
