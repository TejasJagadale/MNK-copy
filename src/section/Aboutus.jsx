import React from "react";
import Head from "next/head";
import '@/style/About.css' 

const Aboutus = () => {
    return (
        <div className="total">
            <div style={{ display: 'flex', justifyContent: 'center', fontSize: 'bold', padding:'30px' }}>
                <h1>About us</h1>
            </div>
            <h5>Makkal Natkatti - Your Ultimate Guide to Daily Panchangam, Festivals, and Auspicious Timings</h5>
            <div>
                <p>Makkal Natkatti is a comprehensive mobile application designed to keep you connected to your cultural and spiritual roots. This user-friendly app provides accurate and timely information about the daily Panchangam (Hindu calendar), festival dates, special events, and auspicious timings, ensuring that you never miss important rituals or celebrations.</p>
            </div>
            <div className="two">
                <h5>Key Features:</h5>
                <div className="one">
                    <div>
                        <h6>1. Daily Panchangam:</h6>
                        <p>Get daily updates on the Panchangam, including key details like Tithi (lunar date), Nakshatra (constellation), Yoga, Karana, and the auspicious timings for rituals and ceremonies. Perfect for planning your day according to traditional beliefs and practices.</p>
                    </div>
                    <div>
                        <h6>2. Festival Dates:</h6>
                        <p>Stay informed about all major Hindu festivals, religious observances, and celebrations throughout the year. Makkal Natkatti provides a detailed list of important festival dates, so you can prepare in advance to observe them with your loved ones.</p>
                    </div>
                    <div>
                        <h6>3. Auspicious Timings (Muhurthams):</h6>
                        <p>The app offers timely notifications of auspicious muhurthams (lucky times) for events such as weddings, housewarmings, and other important occasions. Ensure that your special moments are aligned with the best possible timings for prosperity and well-being.</p>
                    </div>
                    <div>
                        <h6>4. Special Events:</h6>
                        <p>Receive information about spiritual events, local religious functions, and cultural programs happening around you. Whether it's a temple event, community puja, or cultural gathering, Makkal Natkatti helps you stay connected to your spiritual community.</p>
                    </div>
                    <div>
                        <h6>5. User-Friendly Interface:</h6>
                        <p>The app is designed with simplicity in mind, making it easy for users of all ages to access information quickly. With a clean and intuitive layout, Makkal Natkatti ensures you have everything you need at your fingertips.</p>
                    </div>
                </div>
            </div>
            <div className="two">
                <h5>Why Choose Makkal Natkatti?</h5>
                <div className="one">
                    <div>
                        <h6>1. Accurate & Reliable:</h6>
                        <p>Rely on authentic and accurate daily Panchangam data, festival dates, and auspicious timings sourced from trusted Hindu traditions.</p>
                    </div>
                    <div>
                        <h6>2. Convenient & Accessible:</h6>
                        <p>Stay connected to your cultural calendar anytime, anywhere, whether you're planning for the day or looking ahead to upcoming events.</p>
                    </div>
                    <div>
                        <h6>3. Customizable Alerts:</h6>
                        <p>Set personalized notifications for important festivals, muhurthams, and events, so you are always prepared for your spiritual and cultural activities.</p>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'20px'}}>
            <p>Makkal Natkatti is more than just a calendar; it's your personal guide to living in harmony with auspicious timings and celebrating cultural traditions. Embrace the wisdom of ancient practices and stay connected to the pulse of your community with this essential mobile app.</p>
            </div>
            <div>
                <h6>Contact Us</h6>
                <p>If you have any questions or suggestions do not hesitate to contact us at mpeoplesofficial@gmail.com</p>
            </div>
            <div>
                <h6>Address</h6>
                <p>1/248, Raja Ganapathy Complex, 2nd Floor,<br />Opposite BSNL Office, Meyyaanur Main Road,<br />Salem - 636004.<br />PHONE - +91 9487812715</p>
            </div>
        </div>
    );
};

export default Aboutus;