import React from 'react'
import '@/style/CalendarSection.css'
import Header from '@/section/Header';
import WeekCalendar from '@/section/WeekCalendar';
import Footer from '@/section/Footer';

export const metadata = {
  title: "Makkal Calendar | Tamil Weekly Calendar",
  // description: "Creote | Business Landing Page",
};

const page = () => {
  return (
    <di className='App'>
      <Header />
      <main className={`d-flex h-100 justify-content-center align-items-center my-2`}>
        <div className='container-xl'>
          <WeekCalendar />
        </div>
      </main>
      <Footer/>
    </di>
  )
}

export default page