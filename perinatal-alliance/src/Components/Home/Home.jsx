import React from "react";
import landingImg from "../../images/landingImg.jpg";
import bellyWPacifier from "../../images/belly-w-pacifier.jpg";
import ladyAndDoctor from "../../images/lady-and-doctor.jpg";
import Footer from "../Header-and-Footer/Footer";
import OnlineAppointments from "./OnlineAppointments";
import { Link } from "react-router-dom";
import ContactPage from "../Contact/ContactPage";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="landing-img-container">
        <img src={landingImg} alt="landing-img" className="landing-img" />
        <div className="learn-more-btn-container">
          <div className="learn-more-btn-text">
            TELEHEALTH MATERNAL FETAL MEDICINE SERVICES
          </div>
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
      </div>
      <div className="home-content-container">
        <div className="home-title-container">
          <h1 className="home-content-title">about perinatal alliance</h1>
        </div>

        <div className="home-content-grid">
          <div className="home-content-cell">
            <div className="home-content-item">
              <img
                src={bellyWPacifier}
                alt="img"
                className="home-content-img"
              />
            </div>
            <div className="home-content-words">
              <h4 className="home-content-header">Our Mission</h4>
              <p className="home-content-text">
                <span>
                  At Perinatal alliance, our mission is to provide
                  comprehensive, patient-centered support to obstetricians and
                  expectant mothers throughout their pregnancy journey.
                </span>
              </p>
            </div>
          </div>
          <div className="home-content-cell">
            <div className="home-content-words">
              <h4 className="home-content-header">Our Services</h4>
              <p className="home-content-text">
                <span>
                  We connect you directly with our renowned team of
                  board-certified maternal fetal medicine specialists. This
                  means access to expert consultations and insights, even in
                  areas where specialized care might be limited. Our specialists
                  can perform detailed evaluations of fetal anatomy, growth, and
                  fetal echocardiograms, ensuring early detection of any
                  potential issues.
                </span>
              </p>
            </div>
            <div className="home-content-item">
              <img src={ladyAndDoctor} alt="img" className="home-content-img" />
            </div>
          </div>

          <div className="home-content-cell">
            <div className="home-content-item"></div>
            <div className="home-content-words">
              <h4 className="home-content-header">
                Embrace the Future of Maternal Fetal Medicine
              </h4>
              <p className="home-content-text">
                <span>
                  With our Telehealth Maternal Fetal Medicine Services, we are
                  taking a bold step towards a future where distance is no
                  longer a barrier to exceptional care. We are passionate about
                  delivering innovative solutions that redefine healthcare
                  possibilities. Embrace the future of maternal fetal medicine
                  with us, and together, we will shape a healthier and brighter
                  tomorrow for expectant mothers and their precious little ones.
                </span>
              </p>
            </div>
          </div>
        </div>
          <OnlineAppointments />
          <ContactPage />
        <Footer />
      </div>
    </>
  );
};

export default Home;
