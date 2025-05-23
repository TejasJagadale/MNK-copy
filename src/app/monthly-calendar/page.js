import React from 'react'
import '@/style/CalendarSection.css'
import Header from '@/section/Header';
import MonthCalendar from '@/section/MonthCalendar';
import Footer from '@/section/Footer';

export const metadata = {
  title: "Makkal Calendar | Tamil Monthly Calendar",
  // description: "Creote | Business Landing Page",
};

const page = () => {
  return (
    <div className='App'>
      <Header />
      <main className={`d-flex h-100 justify-content-center align-items-center my-2`}>
        <div className='container-xl'>
          <MonthCalendar />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default page