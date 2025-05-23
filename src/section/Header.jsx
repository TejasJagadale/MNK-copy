'use client'
import React, { useState } from "react";
import "@/style/Header.css";
import { FaCalendarWeek, FaCalendarDay, FaCalendarDays, FaAddressBook } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header p-0">
      <div className="container header-wrapper px-2 px-lg-3 py-1">
        <div className="logo">
          <img src="/images/Makkal_Naalkaati_Logo.png" alt="" />
        </div>
        
        <div className="brand d-none d-lg-block" style={{ width: "300px" }}>
          <img src="/images/Makkal_Naalkaati_Logo1.png" alt="" />
        </div>
        
        {/* Mobile menu button */}
        <button className="d-lg-none mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="fs-3" /> : <FaBars className="fs-3" />}
        </button>
        
        {/* Desktop menu */}
        <div className="share d-flex calandar-icons d-none d-lg-flex">
          <Link
            href="/"
            className="day-icon d-flex align-items-center flex-column gap-md-2 flex-md-row "
            title="Day"
          >
            <FaCalendarDay className="fs-3" />
            <span className="fw-bold">இன்று</span>
          </Link>
          <Link
            href="/weekly-calendar"
            className="week-icon d-flex align-items-center flex-column gap-md-2 flex-md-row"
            title="Weekly"
          >
            <FaCalendarWeek className="fs-3" />
            <span className="fw-bold">வாரம்</span>
          </Link>
          <Link
            href="/monthly-calendar"
            className="month-icon d-flex align-items-center flex-column gap-md-2 flex-md-row"
            title="Monthly"
          >
            <FaCalendarDays className="fs-3" />
            <span className="fw-bold">மாதம்</span>
          </Link>
          <Link
            href="/drawing-results"
            className="month-icon d-flex align-items-center flex-column gap-md-2 flex-md-row justify-content-center text-center"
            title="Monthly"
          >
            <FaCalendarDays className="fs-3" />
            <span className="fw-bold">ஓவிய போட்டி 2025</span>
          </Link>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu d-lg-none">
            <Link
              href="/"
              className="day-icon d-flex align-items-center gap-2 py-2"
              title="Day"
              onClick={toggleMenu}
            >
              <FaCalendarDay className="fs-3" />
              <span className="fw-bold">இன்று</span>
            </Link>
            <Link
              href="/weekly-calendar"
              className="week-icon d-flex align-items-center gap-2 py-2"
              title="Weekly"
              onClick={toggleMenu}
            >
              <FaCalendarWeek className="fs-3" />
              <span className="fw-bold">வாரம்</span>
            </Link>
            <Link
              href="/monthly-calendar"
              className="month-icon d-flex align-items-center gap-2 py-2"
              title="Monthly"
              onClick={toggleMenu}
            >
              <FaCalendarDays className="fs-3" />
              <span className="fw-bold">மாதம்</span>
            </Link>
            <Link
              href="/drawing-results"
              className="month-icon d-flex align-items-center gap-2 py-2"
              title="Monthly"
              onClick={toggleMenu}
            >
              <FaCalendarDays className="fs-3" />
              <span className="fw-bold">ஓவிய போட்டி 2025</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



// import React from "react";
// import "@/style/Header.css";
// import { FaCalendarWeek } from "react-icons/fa6";
// import { FaCalendarDay } from "react-icons/fa6";
// import { FaCalendarDays } from "react-icons/fa6";
// import { FaAddressBook } from "react-icons/fa6";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="header p-0">
//       <div className="container header-wrapper px-2 px-lg-3 py-1">
//         <div className="logo">
//           <img src="/images/Makkal_Naalkaati_Logo.png" alt="" />
//         </div>
//         <div className="brand d-none d-lg-block" style={{ width: "300px" }}>
//           <img src="/images/Makkal_Naalkaati_Logo1.png" alt="" />
//         </div>
//         <div className="share d-flex calandar-icons">
//           <Link
//             href="/"
//             className="day-icon d-flex align-items-center flex-column gap-md-2 flex-md-row "
//             title="Day"
//           >
//             <FaCalendarDay className="fs-3" />
//             <span className=" fw-bold">இன்று</span>
//           </Link>
//           <Link
//             href="/weekly-calendar"
//             className="week-icon d-flex align-items-center flex-column gap-md-2 flex-md-row"
//             title="Weekly"
//           >
//             <FaCalendarWeek className="fs-3" />
//             <span className="  fw-bold">வாரம்</span>
//           </Link>
//           <Link
//             href="/monthly-calendar"
//             className="month-icon d-flex align-items-center flex-column gap-md-2 flex-md-row"
//             title="Monthly"
//           >
//             <FaCalendarDays className="fs-3" />
//             <span className=" fw-bold">மாதம்</span>
//           </Link>
//           {/* <Link
//             href="/rangoli-results"
//             className="month-icon d-flex align-items-center flex-column gap-md-2 flex-md-row justify-content-center text-center"
//             title="Monthly"
//           >
//             <FaCalendarDays className="fs-3" />
//             <span className=" fw-bold">ஓவிய போட்டி 2025</span>
//           </Link> */}
//           <Link
//             href="/drawing-results"
//             className="month-icon d-flex align-items-center flex-column gap-md-2 flex-md-row justify-content-center text-center"
//             title="Monthly"
//           >
//             <FaCalendarDays className="fs-3" />
//             <span className=" fw-bold">ஓவிய போட்டி 2025</span>
//           </Link>
//           {/* <Link href="/addvertisement" className="month-icon d-flex align-items-center flex-column gap-md-2 flex-md-row" title='Add'>
//                         <FaAddressBook className='fs-3' />
//                         <span className=' fw-bold'>பயன்பாட்டு விளம்பரம்</span>
//                     </Link> */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
