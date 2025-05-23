import Link from "next/link";
import Image from "next/image";
import '@/style/Footer.css' 

const Footer = () => {
  return (
    <footer className="below" style={{ fontFamily: "Arial" }}>
      <div className="mx-5">
        <div className="d-flex flex-column flex-lg-row align-items-center my-3">
          {/* Logo & Description */}
          <div className="border_line_about col-12 col-lg-8 col-xl-8 pe-4 py-2 text-center h-100 d-flex flex-column flex-lg-row align-items-center gap-4 pb-sm-4 pb-md-4 pb-lg-2 align-items-lg-center justify-content-center h-100">
            <div className="logo col-2">
              <Link href="/" passHref>
                <img src="/images/thinasarinalkatti.png" alt="Makkal Naalkaati Logo" width={100} height={50} />
              </Link>
            </div>
            <p className="col fw-normal text-start text-dark" style={{ letterSpacing: ".8px", fontSize: "14px" }}>
              மக்கள் நாட்காட்டி என்பது இன்றைய மக்களின் அன்றாட சிந்தனையை அறிவூட்டும் ஒரு பயன்பாடாகும். இதில் 12 ராசிகள் 27
              நட்சத்திரங்கள் மற்றும் கிரகங்களின் கோணங்களை அறியலாம். பழங்காலக் கோயில்கள் அவற்றின் புராண அம்சங்களுடன் ஆன்மீகத்
              தகவல்களையும் வழங்குகின்றன.
            </p>
          </div>

          {/* Contact Section */}
          <div className="border_line_contact px-4 pt-2 pt-lg-0 col col-sm-6 col-lg-4 col-xl-4 d-flex justify-content-between mt-3 mt-lg-0">
            <div className="w-100 d-flex flex-column">
              <p className="fw-bold p-0 py-2 m-0 text-dark">Contact us</p>
              <ul className="list-unstyled reachout-list d-flex flex-column gap-3 mb-0 my-2">
                <li className="d-flex gap-2 align-items-center">
                  📧 <a style={{ fontSize: "14px" }} href="mailto:mpeoplesofficial@gmail.com">mpeoplesofficial@gmail.com</a>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  📞 <a style={{ fontSize: "14px" }} href="https://wa.me/+919487812715">+91 9487812715</a>
                </li>
              </ul>
              <div className="d-flex gap-2 my-3">
                📍
                <p className="p-0 m-0 text-secondary" style={{ fontSize: "14px" }}>
                  1/248, Raja Ganapathy Complex,<br />
                  2nd Floor, Opposite BSNL Office,<br />
                  Meyyaanur Main Road, Salem - 636004.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Policies */}
        <div className="col-sm-6 col-xl-12 w-100 d-flex flex flex-column flex-sm-row justify-content-between align-items-start align-items-md-center px-4 border-2 border-top">
          <div className="order-2 d-flex flex-column flex-sm-row gap-2 align-items-start align-items-sm-center">
            <p className="fw-bold p-0 py-2 m-0 text-dark">Follow us</p>
            <ul className="d-flex list-unstyled gap-2 social-list my-2 justify-content-center">
              <li className="social-icon-item">
              <a href="https://www.instagram.com/makkal_calendar?igsh=bml4emczZXU5ZXV6" target="_blank" rel="noopener noreferrer" title="Instagram"><img src="/images/instagram.png" style={{height:'30px', width:'30px'}} alt="" /></a>
              </li>
              {/* <li className="social-icon-item">
              <a href="https://www.Twitter.com/profile.php?id=61561349522345" target="_blank" rel="noopener noreferrer" title="Twitter"><img src="/images/twitter.png" style={{height:'30px', width:'30px'}} alt="" /></a>
              </li> */}
              <li className="social-icon-item">
              <a href="https://www.youtube.com/@Makkalnaatkaati" target="_blank" rel="noopener noreferrer" title="YouTube"><img src="/images/youtube.png" style={{height:'30px', width:'30px'}} alt="" /></a>
              </li>
              <li className="social-icon-item">
              <a href="https://www.facebook.com/profile.php?id=61563438916723" target="_blank" rel="noopener noreferrer" title="Facebook"><img src="/images/facebook.png" style={{height:'30px', width:'30px'}} alt="" /></a>
              </li>
              {/* <li className="social-icon-item">
              <a href="https://www.Linkedin.com/profile.php?id=61561349522345" target="_blank" rel="noopener noreferrer" title="Linkedin"><img src="/images/linkedin.png" style={{height:'30px', width:'30px'}} alt="" /></a>
              </li> */}
            </ul>
          </div>
          <div className="order-1 d-flex flex-column flex-lg-row gap-2">
            <Link href="/about-us" className="fw-bold p-0 py-2 m-0">About Us <img src="/images/up-right-arrow.png" alt="" style={{width:'10px', height:'10px'}} /></Link>
            <Link href="/privacy-policy" className="fw-bold p-0 py-2 m-0">Privacy Policy <img src="/images/up-right-arrow.png" alt="" style={{width:'10px', height:'10px'}} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;