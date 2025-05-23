// "use client"
// import { useEffect } from "react";
import React from "react";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {

  // useEffect(() => {
  //   import('/bootstrap/dist/js/bootstrap.bundle.min.js');
  // }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:type" content="website" />
        <title>Makkal Calender - Tamil Calender 2025</title>
        <meta name="keywords" content="2025 tamil calendar, 2025 tamil monthly calendar" />
        <meta name="description" content="Best website for tamil monthly calendar 2025." />
        <meta property="og:title" content="Makkal Calender - Tamil Calender 2025" />
        <meta property="og:description" content="Best website for tamil monthly calendar 2025." />
        <meta name="twitter:title" content="Makkal Calender - Tamil Calender 2025" />
        <meta name="twitter:description" content="Best website for tamil monthly calendar 2025." />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="googlebot-news" content="index,follow" />
        <meta name="slurp" content="index,follow" />
        <meta name="author" content="MPeoples Business Solutions" />
        <link rel="icon" type="image/x-icon" href="/Makkal_Naalkaati_Logo.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

