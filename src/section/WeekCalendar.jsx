// 'use client'
// import React, { Fragment, useEffect, useState } from 'react'
// import '@/style/CalendarSection.css'
// // import calendarData from '../../public/data/month2025.json'; // Adjust the path as necessary
// import { data } from '@/utils/Data';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
// import PlayStoreBanner from '@/component/PlayStoreBanner';

// // import MonthList from './MonthList';

// const WeekCalendar = () => {

//     const { specialDayImages } = data

//     const [calendarData, setCalendarData] = useState(null);

//     const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Default to the first month
//     const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Default to the first week

//     // Get today's date details for initial selection
//     useEffect(() => {
//         if (calendarData) {
//             const today = new Date();
//             const currentMonth = today.getMonth() + 1;
    
//             const initialMonthIndex = calendarData.cal.findIndex(
//                 month => parseInt(month.month) === currentMonth
//             );
    
//             if (initialMonthIndex !== -1) {
//                 setCurrentMonthIndex(initialMonthIndex);
    
//                 const weeks = createWeeks(calendarData.cal[initialMonthIndex].days);
                
//                 // Ensure `day.date` is converted to a number before comparison
//                 const initialWeekIndex = weeks.findIndex(week =>
//                     week.some(day => day && parseInt(day.date, 10) === today.getDate())
//                 );
    
//                 setCurrentWeekIndex(initialWeekIndex !== -1 ? initialWeekIndex : 0);
//             }
//         }
//     }, [calendarData]);
    

//     useEffect(() => {
//         fetch('/data/month2025.json') // Adjust the path as necessary
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("data", data);
                
//                 setCalendarData(data); // Store the fetched data in state
//                 // Automatically select the current month when the component loads
//                 const today = new Date();
//                 console.log(today);
                
//                 const currentMonth = today.getMonth() + 1; // Months are zero-indexed, add 1
//                 console.log(currentMonth);
                
//                 const currentMonthIndex = data.cal.findIndex(
//                     month => parseInt(month.month) === currentMonth
//                 );
//                 console.log(currentMonthIndex);
//                     setCurrentMonthIndex(currentMonthIndex);

//             })
//             .catch((error) => {
//                 console.error('Error fetching the calendar data:', error);
//             });
//     }, []);

//     if (!calendarData) {
//         return <p>Loading...</p>; // Show loading indicator while data is being fetched
//     }

//     // Helper function to create weeks from days in the month
//     const createWeeks = (daysInMonth) => {
//         const weekDays = calendarData.calendarDays;
//         const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);
//         const weeks = [];
//         let week = new Array(startDayIndex).fill(null); // Fill with `null` for initial empty slots

//         daysInMonth.forEach((day, index) => {
//             week.push(day);
//             if (week.length === 7 || index === daysInMonth.length - 1) {
//                 weeks.push(week);
//                 week = [];
//             }
//         });
//         return weeks;
//     };

//     // Get the current month's data and create weeks from it
//     const currentMonthData = calendarData.cal[currentMonthIndex];
//     const weeks = createWeeks(currentMonthData.days);

//     // Function to handle moving to the previous week
//     const handlePrevWeek = () => {
//         if (currentWeekIndex > 0) {
//             setCurrentWeekIndex(currentWeekIndex - 1);
//         } else if (currentMonthIndex > 0) {
//             // Move to the last week of the previous month
//             const newMonthIndex = currentMonthIndex - 1;
//             const newWeeks = createWeeks(calendarData.cal[newMonthIndex].days);
//             setCurrentMonthIndex(newMonthIndex);
//             setCurrentWeekIndex(newWeeks.length - 1);
//         }
//     };

//     // Function to handle moving to the next week
//     const handleNextWeek = () => {
//         if (currentWeekIndex < weeks.length - 1) {
//             setCurrentWeekIndex(currentWeekIndex + 1);
//         } else if (currentMonthIndex < calendarData.cal.length - 1) {
//             // Move to the first week of the next month
//             setCurrentMonthIndex(currentMonthIndex + 1);
//             setCurrentWeekIndex(0);
//         }
//     };

//     // Determine if buttons should be disabled
//     const isPrevDisabled = currentMonthIndex === 0 && currentWeekIndex === 0;
//     const isNextDisabled = currentMonthIndex === calendarData.cal.length - 1 &&
//         currentWeekIndex === weeks.length - 1;


//     // const [calendarData, setCalendarData] = useState(null);
//     // const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

//     // useEffect(() => {
//     //     fetch('/data/month2025.json') // Adjust the path as necessary
//     //         .then((response) => response.json())
//     //         .then((data) => {
//     //             setCalendarData(data); // Store the fetched data in state
//     //             // Automatically select the current month when the component loads
//     //             const today = new Date();
//     //             const currentMonth = today.getMonth() + 1; // Months are zero-indexed, add 1
//     //             const currentMonthIndex = data.cal.findIndex(
//     //                 month => parseInt(month.month) === currentMonth
//     //             );
//     //             if (currentMonthIndex !== -1) {
//     //                 setCurrentMonthIndex(currentMonthIndex);
//     //             }
//     //         })
//     //         .catch((error) => {
//     //             console.error('Error fetching the calendar data:', error);
//     //         });
//     // }, []);

//     // const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Default to the first week

//     // // Helper function to create weeks from days in the month
//     // const createWeeks = (daysInMonth) => {
//     //     const weekDays = calendarData.calendarDays;
//     //     const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);
//     //     const weeks = [];
//     //     let week = new Array(startDayIndex).fill(null); // Fill with `null` for initial empty slots

//     //     daysInMonth.forEach((day, index) => {
//     //         week.push(day);
//     //         if (week.length === 7 || index === daysInMonth.length - 1) {
//     //             weeks.push(week);
//     //             week = [];
//     //         }
//     //     });
//     //     return weeks;
//     // };

//     // // Get the current month's data and create weeks from it
//     // const calendar = calendarData.cal[currentMonthIndex];
//     // const weeks = createWeeks(calendar.days);

//     // // Function to handle moving to the previous week
//     // const handlePrevWeek = () => {
//     //     if (currentWeekIndex > 0) {
//     //         setCurrentWeekIndex(currentWeekIndex - 1);
//     //     } else if (currentMonthIndex > 0) {
//     //         // Move to the last week of the previous month
//     //         setCurrentMonthIndex(currentMonthIndex - 1);
//     //         setCurrentWeekIndex(createWeeks(calendarData.cal[currentMonthIndex - 1].days).length - 1);
//     //     }
//     // };

//     // // Function to handle moving to the next week
//     // const handleNextWeek = () => {
//     //     if (currentWeekIndex < weeks.length - 1) {
//     //         setCurrentWeekIndex(currentWeekIndex + 1);
//     //     } else if (currentMonthIndex < calendarData.cal.length - 1) {
//     //         // Move to the first week of the next month
//     //         setCurrentMonthIndex(currentMonthIndex + 1);
//     //         setCurrentWeekIndex(0);
//     //     }
//     // };

//     // // Determine if buttons should be disabled
//     // const isPrevDisabled = currentMonthIndex === 0 && currentWeekIndex === 0;
//     // const isNextDisabled = currentMonthIndex === calendarData.cal.length - 1 &&
//     //     currentWeekIndex === weeks.length - 1;


//     // const handleMonthChange = (index) => {
//     //     setCurrentMonthIndex(index);
//     // };

//     return (
//         <div className='d-flex flex-column flex-lg-row gap-2 justify-content-between'>
//             {/* <div className='calendar-section my-4 p-3 py-xl-4 px-xl-4'> */}
//             <div className='col-12 col-lg-10 calendar-section pt-2 pb-xl-3 px-xl-3 mx-0'>
//                 {/* <div className="calendar-wrapper p-1 py-xl-4 px-xl-4"> */}
//                 <div className=" p-2 p-md-3 pb-xl-3 px-xl-3">

//                     <div>
//                         <div className="row align-items-center justify-content-center calendar-header pb-2 position-relative">
//                             <div className="col text-center middle">
//                                 <div className="title-month p-0 m-0">
//                                     {currentMonthData.month_name}
//                                 </div>
//                                 <div className="title-desc">
//                                     {currentMonthData.month_name_tamil}
//                                 </div>
//                                 <h6 className="fw-semibold">
//                                     வாரம் {currentWeekIndex + 1}
//                                 </h6>
//                             </div>
//                             <div className="day_calendar arrows w-100">
//                                 <div className="left-arrow">
//                                     <a onClick={handlePrevWeek} disabled={isPrevDisabled}>
//                                         <span className=' bg-secondary rounded-circle text-white '>
//                                             <FaAngleLeft />
//                                         </span>
//                                     </a>
//                                 </div>
//                                 <div className="right-arrow">
//                                     <a onClick={handleNextWeek} disabled={isNextDisabled}>
//                                         <span className='p-2 bg-secondary rounded-circle text-white'>
//                                             <FaAngleRight />
//                                         </span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* <MonthList
//                         handleMonthChange={handleMonthChange}
//                     /> */}
//                         <div className="calendar-container">
//                             <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px', marginTop: '20px' }} className='calendar'>
//                                 {calendarData.calendarDays.map((dayName, index) => (
//                                     <div key={index} style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292', color: '#fff' }} className='week-day d-flex justify-content-center align-items-center'>
//                                         {dayName}
//                                     </div>
//                                 ))}
//                                 {weeks[currentWeekIndex].map((day, dayIndex) => (
//                                     <div valign="bottom"
//                                         key={dayIndex}
//                                         className={`day ${day && day.date === new Date().getDate() ? 'highlight-today' : ''}`}
//                                     >
//                                         {day ? (
//                                             <>
//                                                 <span className="tamil_month position-arelative">{day.tamilmonth}</span>
//                                                 {day.special_day && day.special_day.length > 0 && (
//                                                     <>
//                                                         {day.special_day.map((special, idx) => (
//                                                             <span className="special-event-img position-absolute end-0 top-0" key={idx}>
//                                                                 {specialDayImages[special.name] ? (
//                                                                     <img src={specialDayImages[special.name]} alt={special.name} />
//                                                                 )
//                                                                     :
//                                                                     (
//                                                                         <>
//                                                                         <span>{special.name}</span>
//                                                                         </>
                                                                        
//                                                                     )
//                                                                 }
//                                                             </span>
//                                                         ))}
//                                                     </>
//                                                 )}

//                                                 <div className="date-grid">
//                                                     <span className="tamil_date">{day.tamil_date}</span>
//                                                     {/* {day.special_day && day.special_day.length > 0 && (
//                                                     <>
//                                                         {day.special_day.map((special, idx) => (
//                                                             <span className="special-event-img" key={idx}>
//                                                                 {specialDayImages[special.name] ? (
//                                                                     <img src={specialDayImages[special.name]} alt={special.name} />
//                                                                 )
//                                                                     :
//                                                                     (
//                                                                         <>
//                                                                         </>
//                                                                         // <span>{special.name}</span>
//                                                                     )
//                                                                 }
//                                                             </span>
//                                                         ))}
//                                                     </>
//                                                 )} */}
//                                                     <span className="english_date">{day.date}</span>
//                                                 </div>
//                                             </>
//                                         ) : null}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//             <PlayStoreBanner/>
//         </div>
//     )
// }

// export default WeekCalendar

'use client';
import React, { useEffect, useState } from 'react';
import '@/style/CalendarSection.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { data } from '@/utils/Data';
import DayModal from '@/component/DayModal';
import PlayStoreBanner from '@/component/PlayStoreBanner';

const WeekCalendar = () => {
    const { specialDayImages } = data;
    const [calendarData, setCalendarData] = useState(null);
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState('2024-11-01');
    const [humanFormatDate, setHumanFormatDate] = useState('');

    useEffect(() => {
        fetch('/data/month2025.json')
            .then((response) => response.json())
            .then((data) => {
                setCalendarData(data);
                const today = new Date();
                const currentMonth = today.getMonth() + 1;
                const currentDate = today.getDate();

                const currentMonthIndex = data.cal.findIndex(
                    month => parseInt(month.month) === currentMonth
                );

                if (currentMonthIndex !== -1) {
                    const month = data.cal[currentMonthIndex];
                    const weekIndex = Math.floor(
                        month.days.findIndex(day => parseInt(day.date) === currentDate) / 7
                    );
                    setCurrentWeekIndex(weekIndex);
                }
            })
            .catch((error) => {
                console.error('Error fetching the calendar data:', error);
            });
    }, []);

    if (!calendarData) {
        return <p>Loading...</p>; // Show loading indicator while data is being fetched
    }

    const calendar = calendarData.cal.find(month => parseInt(month.month) === new Date().getMonth() + 1);
    const daysInMonth = calendar.days;

    const weekDays = calendarData.calendarDays;
    const weeks = [];
    let week = [];

    // // Organize the days into weeks
    daysInMonth.forEach((day, index) => {
        week.push(day);
        if (week.length === 7 || index === daysInMonth.length - 1) {
            weeks.push(week);
            week = [];
        }
    });

    // Helper function to create weeks from days in the month
    // const createWeeks = (daysInMonth) => {
    //     const weekDays = calendarData.calendarDays;
    //     const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);
    //     const weeks = [];
    //     let week = new Array(startDayIndex).fill(null); // Fill with `null` for initial empty slots

    //     daysInMonth.forEach((day, index) => {
    //         week.push(day);
    //         if (week.length === 7 || index === daysInMonth.length - 1) {
    //             weeks.push(week);
    //             week = [];
    //         }
    //     });
    //     return weeks;
    // };

    const currentWeek = weeks[currentWeekIndex] || [];

    const handlePrevWeek = () => {
        if (currentWeekIndex > 0) {
            setCurrentWeekIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextWeek = () => {
        if (currentWeekIndex < weeks.length - 1) {
            setCurrentWeekIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handleDateClick = (formattedDate, humanFormattedDate) => {
        setSelectedDate(formattedDate);
        setHumanFormatDate(humanFormattedDate);
        setShowModal(true); // Open the modal
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className='d-flex flex-column flex-lg-row gap-2 justify-content-between'>
            <div className='col-12 col-lg-10 calendar-section pt-2 pb-xl-3 px-xl-3 mx-0'>
                <div className="p-2 p-md-3 pb-xl-3 px-xl-3">
                    <div>
                        <div className="row align-items-center justify-content-center calendar-header pb-2 position-relative">
                            <div className="col text-center middle">
                                <div className="title-month p-0 m-0">
                                    {calendar.month_name}
                                </div>
                                <div className="title-desc">
                                    {calendar.month_name_tamil}
                                </div>
                            </div>
                            {/* {/ Arrows /} */}
                            <div className="day_calendar arrows w-100">
                                <div className="left-arrow">
                                    <a onClick={handlePrevWeek}>
                                        <span className='bg-secondary rounded-circle text-white'>
                                            <FaAngleLeft />
                                        </span>
                                    </a>
                                </div>
                                <div className="right-arrow">
                                    <a onClick={handleNextWeek}>
                                        <span className='p-2 bg-secondary rounded-circle text-white'>
                                            <FaAngleRight />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="calendar-container mt-2">
                        <div style={{ display: 'grid', gridTemplateColumns: `repeat(7, 1fr)`, gap: '5px' }} className='calendar'>
                            {weekDays.map((day, index) => (
                                <div key={index}
                                    style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292', color: '#fff' }}
                                    className={`week-day d-none d-md-flex justify-content-center align-items-center ${day === 'ஞாயிறு' ? 'sunday' : ''}`}>
                                    {day}
                                </div>
                            ))}
                            {currentWeek.map((day, dayIndex) => (
                                <div
                                    key={dayIndex}
                                    className={`day day-cell ${day?.tamil_date && parseInt(day.date) === new Date().getDate() ? 'highlight-today' : ''} ${day?.tamilday === 'ஞாயிறு' ? 'sunday' : ''}`}
                                    onClick={() => {
                                        const year = calendar.month_name.split(' ')[1];
                                        const formattedDate = `${year}-${calendar.month.padStart(2, '0')}-${day.date.padStart(2, '0')}`;
                                        const humanFormattedDate = `${day.date.padStart(2, '0')}-${calendar.month.padStart(2, '0')}-${year}`;
                                        handleDateClick(formattedDate, humanFormattedDate);
                                    }}
                                >
                                    {day ? (
                                        <>
                                            <span className="tamil_month position-relative">{day.tamilmonth}</span>
                                            {day.special_day && day.special_day.length > 0 && (
                                                <>
                                                    {day.special_day.map((special, idx) => (
                                                        <span className="special-event-img position-relative" key={idx}>
                                                            {specialDayImages[special.name] && (
                                                                <img src={specialDayImages[special.name]} alt={special.name} />
                                                            )}
                                                        </span>
                                                    ))}
                                                </>
                                            )}
                                            <div className="date-grid">
                                                <span className="tamil_date">{day.tamil_date}</span>
                                                <span className={`english_date ${day?.tamilday === 'ஞாயிறு' ? 'sunday' : ''}`}>{day.date}</span>
                                            </div>
                                        </>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <DayModal
                    showModal={showModal}
                    selectedDate={selectedDate}
                    humanFormatDate={humanFormatDate}
                    handleClose={handleClose}
                />
            </div>
            <PlayStoreBanner />
        </div>
    );
};

export default WeekCalendar;