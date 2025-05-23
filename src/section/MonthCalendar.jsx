'use client'
import React, { useEffect, useState } from 'react';
import '@/style/CalendarSection.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { data } from '@/utils/Data';
import DayModal from '@/component/DayModal';
import PlayStoreBanner from '@/component/PlayStoreBanner';

const MonthCalendar = () => {
    const { specialDayImages } = data
    const [calendarData, setCalendarData] = useState(null);
    const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState('2024-11-01');
    const [humanFormatDate, setHumanFormatDate] = useState('');

    useEffect(() => {
        fetch('/data/month2025.json')
            .then((response) => response.json())
            .then((data) => {
                setCalendarData(data);
                const today = new Date();
                const currentMonth = today.getMonth() + 1; // Months are zero-indexed, add 1
                const currentMonthIndex = data.cal.findIndex(
                    month => parseInt(month.month) === currentMonth
                );
                if (currentMonthIndex !== -1) {
                    setCurrentMonthIndex(currentMonthIndex);
                }
            })
            .catch((error) => {
                console.error('Error fetching the calendar data:', error);
            });
    }, []);

    if (!calendarData) {
        return <p>Loading...</p>; // Show loading indicator while data is being fetched
    }

    const calendar = calendarData.cal[currentMonthIndex];
    const daysInMonth = calendar.days;

    const weekDays = calendarData.calendarDays;
    // Determine the starting day index
    const startDayIndex = weekDays.findIndex(day => day === daysInMonth[0].tamilday);

    // Get today's date details for highlighting
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1;

    // Organize the days into weeks
    const weeks = [];
    let week = new Array(startDayIndex).fill(null);

    daysInMonth.forEach((day, index) => {
        week.push(day);
        if (week.length === 7 || index === daysInMonth.length - 1) {
            weeks.push(week);
            week = [];
        }
    });

    const handlePrevMonth = () => {
        if (currentMonthIndex > 0) {
            setCurrentMonthIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonthIndex < calendarData.cal.length - 1) {
            setCurrentMonthIndex((prevIndex) => prevIndex + 1);
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
                <div className=" p-2 p-md-3 pb-xl-3 px-xl-3">
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
                            {/* Arrows */}
                            <div className="day_calendar arrows w-100">
                                <div className="left-arrow">
                                    <a onClick={handlePrevMonth}>
                                        <span className=' bg-secondary rounded-circle text-white '>
                                            <FaAngleLeft />     
                                        </span>
                                    </a>
                                </div>
                                <div className="right-arrow">
                                    <a onClick={handleNextMonth}>
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
                            {weekDays.map((day, index) => (
                                <div key={index}
                                    style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#929292', color: '#fff' }}
                                    className={`week-day d-flex d-md-none justify-content-center align-items-center ${day === 'ஞாயிறு' ? 'sunday' : ''}`}>
                                    {day.slice(0,2) + '.'}
                                </div>
                            ))}
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex} style={{ display: 'contents' }} className="week">
                                    {week.map((day, dayIndex) => (
                                        <div
                                            key={dayIndex}
                                            className={`day day-cell ${day?.tamil_date &&
                                                parseInt(day.date) === currentDate &&
                                                currentMonth === parseInt(calendar.month)
                                                ? 'highlight-today'
                                                : ''
                                                } ${day?.tamilday === 'ஞாயிறு' ? 'sunday' : ''}`}

                                            onClick={() => {
                                                const year = calendar.month_name.split(' ')[1]; // Extract year from month_name
                                                const formattedDate = `${year}-${calendar.month.padStart(2, '0')}-${day.date.padStart(2, '0')}`; // Format as YYYY-MM-DD
                                                const humanFormattedDate = `${day.date.padStart(2, '0')}-${calendar.month.padStart(2, '0')}-${year}`; // Format as YYYY-MM-DD
                                                handleDateClick(formattedDate, humanFormattedDate); // Pass formatted date
                                            }}
                                        >
                                            {day ? (
                                                <>
                                                    <span className="tamil_month position-relative">{day.tamilmonth}</span>
                                                    {day.special_day && day.special_day.length > 0 && (
                                                        <>
                                                            {day.special_day.map((special, idx) => (
                                                                <span className="d-none d-md-flex d-lg-none special-event-img position-absolute end-0 top-0" key={idx}>
                                                                    {specialDayImages[special.name] && (
                                                                        <img src={specialDayImages[special.name]} alt={special.name} />)
                                                                    }
                                                                </span>
                                                            ))}
                                                        </>
                                                    )}
                                                    <div className="date-grid"
                                                    >
                                                        <span className="tamil_date">{day.tamil_date}</span>
                                                        {day.special_day && day.special_day.length > 0 && (
                                                            <>
                                                                {day.special_day.map((special, idx) => (
                                                                    <span className="special-event-img d-none d-lg-flex position-relative" key={idx}>
                                                                        {specialDayImages[special.name] && (
                                                                            <img src={specialDayImages[special.name]} alt={special.name} />
                                                                        )}
                                                                    </span>
                                                                ))}
                                                            </>
                                                        )}
                                                        <span className={`english_date ${day?.tamilday === 'ஞாயிறு' ? 'sunday' : ''}`}>{day.date}</span>
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>
                                    ))}
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

export default MonthCalendar;