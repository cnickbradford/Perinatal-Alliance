import React from "react";
import "./FAQ.css";
import Faq from "react-faq-component";
import Footer from "../Header-and-Footer/Footer";


const FAQPage = () => {

  const data = {
    

    //This component using an npm package, which takes the data in this object and makes an FAQ page out of it.
    //https://www.npmjs.com/package/react-faq-component - This is the link to the npm package for reference.
    rows: [
      {
        title: "1. What is Maternal Fetal Medicine (MFM)?",
        content:
          "Maternal Fetal Medicine is a specialized branch of obstetrics that focuses on managing high-risk pregnancies and fetal conditions. MFM specialists are experts in diagnosing and managing complex pregnancy-related issues to ensure the best possible outcomes for both the mother and the baby. ",
      },
      {
        title:
          "2. How can Maternal Fetal Medicine Services benefit me as an expectant mother?",
        content:
          " Maternal Fetal Medicine Services provide personalized care and monitoring for high-risk pregnancies. With access to top MFM specialists, advanced ultrasound technology, and remote monitoring through telehealth, you can receive comprehensive evaluations, timely interventions, and expert guidance throughout your pregnancy journey. ",
      },
      {
        title:
          "3. What is Telehealth in the context of Maternal Fetal Medicine?",
        content:
          "Telehealth in Maternal Fetal Medicine refers to the use of secure virtual platforms to conduct remote consultations, assessments, and follow-ups between expectant mothers, obstetricians, and MFM specialists. It enables convenient, real-time access to specialized care regardless of geographic location. ",
      },
      {
        title:
          "4. How does Telehealth support obstetricians in their practice?",
        content:
          "Telehealth provides valuable support to obstetricians by connecting them with MFM specialists for consultations and case discussions. It allows for collaborative care, sharing of expertise, and obtaining second opinions, leading to well-informed decisions and improved patient outcomes. ",
      },
      {
        title:
          "5. What are the benefits of using Telehealth in Maternal Fetal Medicine for patients?",
        content:
          " Telehealth offers several benefits for patients, including reduced travel time and costs, increased appointment flexibility, and enhanced access to specialized care, especially in remote or underserved areas. It also allows for continuous monitoring and timely interventions, promoting a safer and more convenient pregnancy experience.",
      },
      {
        title:
          "6. Are Telehealth consultations as effective as in-person visits for Maternal Fetal Medicine services?",
        content:
          " Yes, Telehealth consultations in Maternal Fetal Medicine have been proven to be highly effective and comparable to in-person visits in terms of clinical outcomes. Advanced technology, including high-resolution ultrasound and secure data sharing, ensures accurate assessments and diagnoses.",
      },
      {
        title: "7. Is Telehealth secure and private?",
        content:
          " Absolutely. Telehealth platforms utilized for Maternal Fetal Medicine services adhere to strict security and privacy regulations. They use encrypted communication channels to protect patient information, ensuring confidentiality during remote consultations ",
      },
    ],
  };
  
  //This object is used to style the FAQ page.
  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    arrowColor: "#5090e5",
    rowContentTextSize: "16px",
    rowContentColor: "grey"

  }

  //This object is used to configure the FAQ page.
  const config = {
    animate: true,
  }
  
  
  return (
  <>
  <div className="faq-container">
    <h1 className="faq-header">frequently asked questions</h1>
    <p className="faq-sub-header">Please contact us if you cannot find an answer to your question.</p>
    <Faq 
    data={data}
    styles={styles}
    config={config}
    />
  </div>
  <Footer />
  </>
)};

export default FAQPage;
