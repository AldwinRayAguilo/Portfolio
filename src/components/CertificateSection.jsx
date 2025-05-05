import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../components/CertificateSection.css";

// Certificates Images
import certImg1 from "../assets/certificates/cert1.jpg";
import certImg2 from "../assets/certificates/cert2.jpg";
import certImg3 from "../assets/certificates/cert3.jpg";
import certImg4 from "../assets/certificates/cert4.jpg";
import certImg5 from "../assets/certificates/cert5.jpg";
import certImg6 from "../assets/certificates/cert6.jpg";
import certImg7 from "../assets/certificates/cert7.jpg";
import certImg8 from "../assets/certificates/cert8.jpg";
import certImg9 from "../assets/certificates/cert9.jpg";
import certImg10 from "../assets/certificates/cert10.jpg";
import certImg11 from "../assets/certificates/cert11.jpg";
import certImg12 from "../assets/certificates/cert12.jpg";
import freecodecampImg from "../assets/certificates/rescertificate.jpg";
import freecodecampImg2 from "../assets/certificates/pyscertificate.jpg";

// Certificates PDF or Links
import certPdf1 from "../assets/certificates/c programming basics.pdf";
import certPdf2 from "../assets/certificates/data analyst 101.pdf";
import certPdf3 from "../assets/certificates/deep learning.pdf";
import certPdf4 from "../assets/certificates/generative ai for beginners.pdf";
import certPdf5 from "../assets/certificates/Getting Started with Full Stack Java Development.pdf";
import certPdf6 from "../assets/certificates/Introduction to Cloud Security.pdf";
import certPdf7 from "../assets/certificates/Introduction to Front End Development.pdf";
import certPdf8 from "../assets/certificates/Introduction to PHP.pdf";
import certPdf9 from "../assets/certificates/Introduction to SQL.pdf";
import certPdf10 from "../assets/certificates/Introduction to the Computer Networking.pdf";
import certPdf11 from "../assets/certificates/Java Programming for Beginners.pdf";
import certPdf12 from "../assets/certificates/Python for Beginners.pdf";

const certificates = [
  { title: "C Programming Basics", image: certImg1, pdf: certPdf1 },
  { title: "Data Analyst 101", image: certImg2, pdf: certPdf2 },
  { title: "Deep Learning", image: certImg3, pdf: certPdf3 },
  { title: "Generative AI for Beginners", image: certImg4, pdf: certPdf4 },
  { title: "Full Stack Java Development", image: certImg5, pdf: certPdf5 },
  { title: "Cloud Security", image: certImg6, pdf: certPdf6 },
  { title: "Front End Development", image: certImg7, pdf: certPdf7 },
  { title: "PHP", image: certImg8, pdf: certPdf8 },
  { title: "SQL", image: certImg9, pdf: certPdf9 },
  { title: "Computer Networking", image: certImg10, pdf: certPdf10 },
  { title: "Java for Beginners", image: certImg11, pdf: certPdf11 },
  { title: "Python for Beginners", image: certImg12, pdf: certPdf12 },
  {
    title: "Responsive Web Design - freeCodeCamp",
    image: freecodecampImg,
    pdf: "https://www.freecodecamp.org/certification/fcc7b03abf4-b4ff-4e7f-8b78-87dc5d50d6d2/responsive-web-design",
  },
  {
    title: "Scientific Computing with Python - freeCodeCamp",
    image: freecodecampImg2,
    pdf: "https://www.freecodecamp.org/certification/fcc7b03abf4-b4ff-4e7f-8b78-87dc5d50d6d2/scientific-computing-with-python-v7",
  },
];

const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="certificate-section">
      <h2>My Certificates</h2>
      <div className="certificate-slider-container">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="certificate-slider"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div
                className="certificate-card"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-image"
                />
                <p>{cert.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedCert && (
        <div
          className="certificate-modal fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="modal-content zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <p>{selectedCert.title}</p>
            <a
              href={selectedCert.pdf}
              target="_blank"
              rel="noreferrer"
              className="view-pdf-button"
            >
              View Certificate
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateSection;
