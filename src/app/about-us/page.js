import React from 'react'
import '@/style/CalendarSection.css'
import Header from '@/section/Header';
import Aboutus from '@/section/Aboutus';
import Footer from '@/section/Footer';

export const metadata = {
  title: "Makkal Calendar | About Us",
  // description: "Creote | Business Landing Page",
};

const page = () => {
  return (
    <div className='App'>
      <Header />
      <main className={`d-flex h-100 justify-content-center align-items-center my-2`}>
        <div className='container-xl'>
          <Aboutus />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default page