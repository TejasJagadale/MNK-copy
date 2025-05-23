"use client";
import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Slider from "react-slick";
import "@/style/Rangoli.css";
import "@/style/CalendarSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/section/Header";
import Footer from "@/section/Footer";

const AppPromotionPopup = ({ onClose }) => {
  return (
    <div className="download-popup-overlay d-flex justify-content-center align-items-center">
      <div className="download-popup-content" style={{ maxWidth: "400px" }}>
        <button onClick={onClose} className="download-popup-close">
          &times;
        </button>
        <div className="download-popup-header text-center">
          <h3>Download Our App!</h3>
          <p>Scan the QR code to download our application</p>
        </div>
        <div className="text-center p-4">
          {/* Replace with your actual QR code image */}
          <img
            src="/images/qr.jpg"
            alt="App QR Code"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <h4 className="mb-3 popuptitle">மக்கள் நாட்காட்டி</h4>
          <div className="d-flex flex-column justify-content-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.makkal.calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <img
                src="/images/Google_Play.png"
                alt=""
                style={{ width: "200px" }}
                className=""
              />
            </a>
            <p>Click to Install</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DownloadPopup = ({ onClose }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [showDownloadLink, setShowDownloadLink] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setShowDownloadLink(true);
  };

  const downloadUrl = `https://media.mpdatahub.com/kolamresult/${mobileNumber}.pdf`;

  return (
    <div className="download-popup-overlay ">
      <div className="download-popup-content">
        <button onClick={onClose} className="download-popup-close">
          &times;
        </button>
        <div className="download-popup-header">
          <h3>Download Your Certificate</h3>
        </div>
        <form onSubmit={handleSubmit} className="download-popup-form">
          <div className="form-group">
            <label htmlFor="mobileNumber">
              Enter your registered mobile number:
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter 10-digit mobile number"
              className="form-control"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
            {error && <div className="error-message">{error}</div>}
          </div>
          <div className="form-submit">
            <button type="submit" className="submit-btn">
              Generate Download Link
            </button>
          </div>
          {showDownloadLink && (
            <div className="download-link-container">
              <p>Your certificate is ready!</p>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                Click here to download
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const RangoliCompetition = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeCategory, setActiveCategory] = useState("kids");
  const [showAppPromo, setShowAppPromo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAppPromo(true);
    }, 500); // Show after 1 second

    return () => clearTimeout(timer);
  }, []);

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

  // Winners data for each category
  const winnersData = {
    kids: [
      {
        id: 1,
        name: "Sai daya",
        image: "/images/winners/under9/V.Sai daya_8age.jpg",
        position: "முதல் பரிசு",
        regnum: "DRW087"
      },
      {
        id: 2,
        name: "Lakshana",
        image: "/images/winners/under9/K.Lakshana_8age.jpeg",
        position: "இரண்டாம் பரிசு",
        regnum: "DRW050"
      }
    ],
    teens: [
      {
        id: 1,
        name: "Tharun",
        image: "/images/winners/under13/Tharun_11years.jpg",
        position: "முதல் பரிசு",
        regnum: "DRW007"
      },
      {
        id: 2,
        name: "Sudharshan",
        image: "/images/winners/under13/sudharson_13yrs.jpg",
        position: "இரண்டாம் பரிசு",
        regnum: "DRW010"
      }
    ],
    adults: [
      {
        id: 1,
        name: "Priyadharshini",
        image: "/images/winners/under18/Priyadharshini_15yrs.jpg",
        position: "முதல் பரிசு",
        regnum: "DRW036"
      },
      {
        id: 2,
        name: "Oviyan",
        image: "/images/winners/under18/Oviyan_15yrs.jpg",
        position: "இரண்டாம் பரிசு",
        regnum: "DRW051"
      }
    ]
  };

  const specialwinnersData = {
    kids: [
      {
        id: 1,
        name: "Devamithran",
        image: "/images/specialprize/under9/A. Devamithran_7age.jpg",
        regnum: "DRW080"
      },
      {
        id: 2,
        name: "Deepthi",
        image: "/images/specialprize/under9/Deepthi_8yrs.jpg",
        regnum: "DRW035"
      },
      {
        id: 3,
        name: "G.Kavin",
        image: "/images/specialprize/under9/G.Kavin_9yrs.jpeg",
        regnum: "DRW014"
      },
      {
        id: 4,
        name: "Saicharan",
        image: "/images/specialprize/under9/saicharan.jpg",
        regnum: "DRW108"
      },
      {
        id: 5,
        name: "Sanjith",
        image: "/images/specialprize/under9/Sanjith_9yrs.jpg",
        regnum: "DRW032"
      }
    ],
    teens: [
      {
        id: 1,
        name: "GANESHAPERUMAL",
        image: "/images/specialprize/under13/GANESHAPERUMAL_13age.jpg",
        regnum: "DRW006"
      },
      {
        id: 2,
        name: "H.Swetha",
        image: "/images/specialprize/under13/H.Swetha_13age.jpg",
        regnum: "DRW083"
      },
      {
        id: 3,
        name: "Hasini",
        image: "/images/specialprize/under13/Hasini_14.jpg",
        regnum: "DRW070"
      },
      {
        id: 4,
        name: "Iniya",
        image: "/images/specialprize/under13/Iniya_13yrs.jpg",
        regnum: "DRW0104"
      },
      {
        id: 5,
        name: "K.Yuvaraj",
        image: "/images/specialprize/under13/K.Yuvaraj_13.jpg",
        regnum: "DRW049"
      },
      {
        id: 6,
        name: "Maneesh",
        image: "/images/specialprize/under13/Maneesh_13age.jpg",
        regnum: "DRW044"
      },
      {
        id: 7,
        name: "Jeevak kishore",
        image: "/images/specialprize/under13/O.S.Jeevak kishore_14age.jpg",
        regnum: "DRW092"
      },
      {
        id: 8,
        name: "Soundaryalakshmi",
        image: "/images/specialprize/under13/Soundaryalakshmi_12yrs.jpg",
        regnum: "DRW037"
      },
      {
        id: 9,
        name: "Sowbarniya",
        image: "/images/specialprize/under13/Sowbarniya_14yrs.jpg",
        regnum: "DRW043"
      },
      {
        id: 10,
        name: "Sudeep",
        image: "/images/specialprize/under13/Sudeep_11yrs.jpg",
        regnum: "DRW009"
      }
    ]
  };

  // Participants data for each category
  const participantsData = {
    kids: Array.from({ length: 33 }, (_, i) => ({
      id: i + 1,
      image: `/images/Under_9/kid_${i + 1}.jpg`
    })),
    teens: Array.from({ length: 48 }, (_, i) => ({
      id: i + 1,
      image: `/images/10-14/teen1_${i + 1}.jpg`
    })),
    adults: Array.from({ length: 17 }, (_, i) => ({
      id: i + 1,
      image: `/images/15-18/teen2_${i + 1}.jpg`
    }))
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
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
              ஓவிய போட்டி 2025
            </h1>
            <p className="lead fw1">சிறப்பு நிகழ்வு</p>
          </div>

          {/* Category Selection */}
          <div className="category-selector mb-5">
            <div className="btn-group w-100" role="group">
              <button
                type="button"
                className={`btn ${
                  activeCategory === "kids"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveCategory("kids")}
              >
                9 வயதிற்குள் உள்ள பங்கேற்பாளர்கள்
              </button>
              <button
                type="button"
                className={`btn ${
                  activeCategory === "teens"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveCategory("teens")}
              >
                10-14 வயது பங்கேற்பாளர்கள்
              </button>
              <button
                type="button"
                className={`btn ${
                  activeCategory === "adults"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveCategory("adults")}
              >
                15-18 வயது பங்கேற்பாளர்கள்
              </button>
            </div>
          </div>

          {/* <div className="mt-5 p-4 rounded mb-5 baground">
            <h3 className="text-center mb-3 fw">வாழ்த்துக்கள்!</h3>
            <p className="text-center fw1">
              போட்டியில் பங்குபெற்ற அனைவருக்கும் எங்கள் நன்றிகள்.
              வெற்றியாளர்களுக்கு எங்கள் மனம் நிறைந்த வாழ்த்துக்கள். அழகான
              ஓவியங்களுக்கு மிக்க நன்றி!
            </p>
            <div className="text-center mt-4">
              <button
                onClick={() => setShowPopup(true)}
                className="partdownload"
              >
                Download Participation Certificate
              </button>
            </div>
          </div> */}

          {/* Winners Section */}
          <h3 className="text-center mb-4 fw">
            {activeCategory === "kids" && " வெற்றியாளர்கள்"}
            {activeCategory === "teens" && " வெற்றியாளர்கள்"}
            {activeCategory === "adults" && " வெற்றியாளர்கள்"}
          </h3>
          <div className="row justify-content-center mb-5">
            {winnersData[activeCategory].map((winner) => (
              <div key={winner.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <a
                    href={winner.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={winner.image}
                      alt={`winner Painting ${winner.id}`}
                      className="img-fluid rounded shadow rangoli-slider-image"
                    />
                  </a>
                  <div className="text-center">
                    <h5 className="card-title text-success fw1">
                      {winner.name}
                    </h5>
                    <span className="badge bg-warning text-dark p-2">
                      {winner.position}
                    </span>
                  </div>
                  <div className="text-center" style={{ fontWeight: "bolder" }}>
                    {winner.regnum}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-center mb-4 fw">
            {activeCategory === "kids" && " சிறப்பு பரிசு"}
            {activeCategory === "teens" && " சிறப்பு பரிசு"}
            {activeCategory === "adults" && " சிறப்பு பரிசு"}
          </h3>
          <div className="row justify-content-center mb-5">
            {specialwinnersData[activeCategory] &&
            specialwinnersData[activeCategory].length > 0 ? (
              specialwinnersData[activeCategory].map((winner) => (
                <div key={winner.id} className="col-md-2 col-lg-2 h-auto mb-4">
                  <div className="card h-100 shadow-sm">
                    <a
                      href={winner.image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={winner.image}
                        alt={`winner Painting ${winner.id}`}
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
                    <div
                      className="text-center"
                      style={{ fontWeight: "bolder" }}
                    >
                      {winner.regnum}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p className="text-muted">சிறப்பு பரிசு இல்லை</p>
              </div>
            )}
          </div>

          {/* Participants Gallery */}
          <h4 className="text-center mb-5 mt-5 fw" style={{ color: "#e37221" }}>
            {activeCategory === "kids" &&
              "5-9 வயதுடைய பங்கேற்பாளர்களின் ஓவியங்கள்"}
            {activeCategory === "teens" &&
              "10-14 வயதுடைய பங்கேற்பாளர்களின் ஓவியங்கள்"}
            {activeCategory === "adults" &&
              "15-18 வயதுடைய பங்கேற்பாளர்களின் ஓவியங்கள்"}
          </h4>
          <Slider {...sliderSettings} className="mb-5">
            {participantsData[activeCategory].map((participant) => (
              <div key={participant.id} className="p-2 mb-3">
                <a
                  href={participant.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={participant.image}
                    alt={`Participant Painting ${participant.id}`}
                    className="img-fluid rounded shadow rangoli-slider-image"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </main>
      <Footer />
      {showPopup && (
        <div className="modal-overlay">
          <DownloadPopup onClose={() => setShowPopup(false)} />
        </div>
      )}

      {showAppPromo && (
        <div className="modal-overlay">
          <AppPromotionPopup onClose={() => setShowAppPromo(false)} />
        </div>
      )}
    </div>
  );
};

export default RangoliCompetition;

// "use client";
// import React, { useEffect, useState } from "react";
// import confetti from "canvas-confetti";
// import Slider from "react-slick";
// import "@/style/Rangoli.css";
// import "@/style/CalendarSection.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Header from "@/section/Header";
// import Footer from "@/section/Footer";

// const DownloadPopup = ({ onClose }) => {
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [error, setError] = useState("");
//   const [showDownloadLink, setShowDownloadLink] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
//       setError("Please enter a valid 10-digit mobile number");
//       return;
//     }
//     setError("");
//     setShowDownloadLink(true);
//   };

//   const downloadUrl = `https://media.mpdatahub.com/kolamresult/${mobileNumber}.pdf`;

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
//         <button onClick={onClose} className="popup-close-btn">
//           &times;
//         </button>
//         <div className="popup-header">
//           <h2>Enter Your Mobile Number</h2>
//         </div>
//         <form onSubmit={handleSubmit} className="popup-form">
//           <div className="form-group">
//             <input
//               type="tel"
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
//               placeholder="Enter 10-digit mobile number"
//               className="form-input certinput"
//               pattern="[0-9]{10}"
//               maxLength="10"
//               required
//             />
//             {error && <p className="error-message">{error}</p>}
//           </div>
//           <div className="certbtn1">
//             <button type="submit" className="certbtn">
//               Generate Download Link
//             </button>
//           </div>
//           {showDownloadLink && (
//             <div className="download-link-container mt-3">
//               <p>Click below to download your certificate:</p>
//               <a
//                 target="_blank"
//                 href={downloadUrl}
//                 download
//                 className="download-link"
//               >
//                 Download Certificate
//               </a>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// const RangoliCompetition = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="custom-arrow next-arrow" onClick={onClick}>
//         ➡️
//       </div>
//     );
//   };
//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="custom-arrow prev-arrow" onClick={onClick}>
//         ⬅️
//       </div>
//     );
//   };
//   const winners = [
//     {
//       id: 1,
//       name: "?",
//       image: "/images/ek30.jpg",
//       position: "முதல் பரிசு"
//     },
//     {
//       id: 2,
//       name: "?",
//       image: "/images/ek52.jpg",
//       position: "இரண்டாம் பரிசு"
//     },
//     {
//       id: 3,
//       name: "?",
//       image: "/images/ek50.jpg",
//       position: "மூன்றாம் பரிசு"
//     },
//     {
//       id: 4,
//       name: "?",
//       image: "/images/ek55.jpg",
//       position: "நான்காம் பரிசு"
//     }
//   ];

//   const participants = Array.from({ length: 62 }, (_, i) => ({
//     id: i + 1,
//     image: `/images/drawphotos/ek${i + 1}.jpg`
//   }));

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="App">
//       <Header />
//       <main className="d-flex justify-content-center align-items-center my-4">
//         <div className="container-xl">
//           <div className="text-center mb-5">
//             <h1 className="fw-bold" style={{ color: "#e37221" }}>
//               ஓவிய போட்டி 2025
//             </h1>
//             <p className="lead fw1">சிறப்பு நிகழ்வு</p>
//           </div>
//           <div className="mt-5 p-4 rounded mb-5 baground">
//             <h3 className="text-center mb-3 fw">வாழ்த்துக்கள்!</h3>
//             <p className="text-center fw1">
//               போட்டியில் பங்குபெற்ற அனைவருக்கும் எங்கள் நன்றிகள்.
//               வெற்றியாளர்களுக்கு எங்கள் மனம் நிறைந்த வாழ்த்துக்கள். அழகான
//               ஓவியங்களுக்கு மிக்க நன்றி!
//             </p>
//             <div className="text-center mt-4">
//               <button
//                 onClick={() => setShowPopup(true)}
//                 className="partdownload"
//               >
//                 Download Participation Certificate
//               </button>
//             </div>
//           </div>
//           <div className="row justify-content-center mb-5">
//             {winners.map((winner) => (
//               <div key={winner.id} className="col-md-6 col-lg-3 mb-4">
//                 <div className="card h-100 shadow-sm">
//                   <a
//                     href={winner.image}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img
//                       src={winner.image}
//                       alt={`winner Painting ${winner.id}`}
//                       className="img-fluid rounded shadow rangoli-slider-image"
//                     />
//                   </a>
//                   <div className="card-body text-center">
//                     <h5 className="card-title text-success fw1">
//                       {winner.name}
//                     </h5>
//                     <span className="badge bg-warning text-dark p-2">
//                       {winner.position}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <h4 className="text-center text-primary mb-5 mt-5 fw">
//             பங்கேற்பாளர்களின் ஓவியங்கள்
//           </h4>
//           <Slider {...sliderSettings} className="mb-5">
//             {participants.map((participant) => (
//               <div key={participant.id} className="p-2 mb-3">
//                 <a
//                   href={participant.image}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src={participant.image}
//                     alt={`Participant Painting ${participant.id}`}
//                     className="img-fluid rounded shadow rangoli-slider-image"
//                   />
//                 </a>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </main>
//       <Footer />
//       {showPopup && <DownloadPopup onClose={() => setShowPopup(false)} />}
//     </div>
//   );
// };

// export default RangoliCompetition;
