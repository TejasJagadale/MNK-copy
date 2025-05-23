import React from 'react'
import '@/style/CalendarSection.css'
import Header from '@/section/Header';
import Footer from '@/section/Footer';
import Privacypolicy from '@/section/Privacypolicy';

export const metadata = {
  title: "Makkal Calendar | Privacy Policy",
  // description: "Creote | Business Landing Page",
};

const page = () => {
  return (
    <div className='App'>
      <Header />
      <main className={`d-flex h-100 justify-content-center align-items-center my-2`}>
        <div className='container-xl'>
          <Privacypolicy />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default page