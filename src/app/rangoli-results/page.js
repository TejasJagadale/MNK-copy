"use client";
import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Slider from "react-slick";
import "@/style/Rangoli.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/section/Header";
import Footer from "@/section/Footer";

const DownloadPopup = ({ onClose }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      let downloadSuccessful = false;
      try {
        console.log(`https://media.mpdatahub.com/kolamresult/${mobileNumber}.pdf`);        
        const response = await fetch(
          `https://media.mpdatahub.com/${mobileNumber}.pdf`
        );
        console.log(response);
        
        if (response) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `Kolam-certificate-${mobileNumber}.pdf`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
          downloadSuccessful = true;
          setSuccess("Certificate downloaded successfully!");
        }
      } catch (directError) {
        console.log("Direct download failed, trying API endpoint");
      }

      if (!downloadSuccessful) {
        const apiResponse = await fetch("/api/download-certificate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ mobileNumber })
        });

        if (!apiResponse.ok) {
          throw new Error("Certificate not found for this mobile number");
        }

        const apiBlob = await apiResponse.blob();
        const apiUrl = window.URL.createObjectURL(apiBlob);
        const apiA = document.createElement("a");
        apiA.href = apiUrl;
        apiA.download = `rangoli-certificate-${mobileNumber}.pdf`;
        document.body.appendChild(apiA);
        apiA.click();
        window.URL.revokeObjectURL(apiUrl);
        document.body.removeChild(apiA);
        setSuccess("Certificate downloaded successfully!");
      }
    } catch (error) {
      console.error("Download failed:", error);
      setError(
        error.message || "Failed to download certificate. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button onClick={onClose} className="popup-close-btn">
          &times;
        </button>
        <div className="popup-header">
          <h2>Enter Your Mobile Number</h2>
        </div>
        <form onSubmit={handleSubmit} className="popup-form">
          <div className="form-group">
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter 10-digit mobile number"
              className="form-input certinput"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
          </div>
          <div className="certbtn1">
            <button
              type="submit"
              className="certbtn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span> Processing...
                </>
              ) : (
                "Download"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const RangoliCompetition = () => {
  const [showPopup, setShowPopup] = useState(false);
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        ➡️
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        ⬅️
      </div>
    );
  };
  const winners = [
    {
      id: 1,
      name: "கௌரி",
      image: "/images/ek30.jpg",
      position: "முதல் பரிசு"
    },
    {
      id: 2,
      name: "சுந்தரி",
      image: "/images/ek52.jpg",
      position: "இரண்டாம் பரிசு"
    },
    {
      id: 3,
      name: "தமிழ்செல்வி",
      image: "/images/ek50.jpg",
      position: "மூன்றாம் பரிசு"
    },
    {
      id: 4,
      name: "ஸ்ரீதேவி",
      image: "/images/ek55.jpg",
      position: "நான்காம் பரிசு"
    }
  ];

  const participants = Array.from({ length: 62 }, (_, i) => ({
    id: i + 1,
    image: `/images/ek${i + 1}.jpg`
  }));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="App">
      <Header />
      <main className="d-flex justify-content-center align-items-center my-4">
        <div className="container-xl">
          <div className="text-center mb-5">
            <h1 className="fw-bold" style={{ color: "#e37221" }}>
              கோலப்போட்டி 2025
            </h1>
            <p className="lead fw1">தமிழ் புத்தாண்டு சிறப்பு நிகழ்வு</p>
          </div>
          <div className="mt-5 p-4 rounded mb-5 baground">
            <h3 className="text-center mb-3 fw">வாழ்த்துக்கள்!</h3>
            <p className="text-center fw1">
              போட்டியில் பங்குபெற்ற அனைவருக்கும் எங்கள் நன்றிகள்.
              வெற்றியாளர்களுக்கு எங்கள் மனம் நிறைந்த வாழ்த்துக்கள். அழகான கோலம்
              வடிவமைப்புகளுக்கு மிக்க நன்றி!
            </p>
            <div className="text-center mt-4">
              <button
                onClick={() => setShowPopup(true)}
                className="partdownload"
              >
                Download Participation Certificate
              </button>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            {winners.map((winner) => (
              <div key={winner.id} className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 shadow-sm">
                  <a
                    href={winner.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={winner.image}
                      alt={`winner Rangoli ${winner.id}`}
                      className="img-fluid rounded shadow rangoli-slider-image"
                    />
                  </a>
                  <div className="card-body text-center">
                    <h5 className="card-title text-success fw1">
                      {winner.name}
                    </h5>
                    <span className="badge bg-warning text-dark p-2">
                      {winner.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h4 className="text-center text-primary mb-5 mt-5 fw">
            பங்கேற்பாளர்களின் கோலம் படங்கள்
          </h4>
          <Slider {...sliderSettings} className="mb-5">
            {participants.map((participant) => (
              <div key={participant.id} className="p-2 mb-3">
                <a
                  href={participant.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={participant.image}
                    alt={`Participant Rangoli ${participant.id}`}
                    className="img-fluid rounded shadow rangoli-slider-image"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </main>
      <Footer />
      {showPopup && <DownloadPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default RangoliCompetition;
