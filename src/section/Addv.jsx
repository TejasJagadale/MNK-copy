'use client'
import React, { useState, useEffect } from 'react';
import "@/style/dayPageStyle.css";
import "@/style/pagenationStyle.css";
import "@/style/Addv.css";
import PlayStoreBanner from '@/component/PlayStoreBanner';
// import Addv from '@/component/Addv.jsx';


const Addv = () => {

    return (
        <div className='d-flex flex-column flex-lg-row gap-2 justify-content-between'>
            <div className="container p-3">
                {/* Header */}
                <div className="text-center py-2">
                    <h4 className="text-danger fw-bold">
                        ஆன்மீகத் தேடலின் வழிகாட்டி நமது மக்கள் நாட்காட்டி
                    </h4>
                    <h2 className="text-danger fs-5">ஆன்மிகம் சார்ந்த அணைத்து தகவல்களும் ஒரே Application-ல்</h2>
                </div>

                {/* Mobile App Section */}
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img src="/images/mobile.jpg" className="img-fluid" />
                    </div>
                    <div className="col-md-8 p-4" style={{ backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)', borderRadius: '20px' }}>
                        <div style={{ lineHeight: '2' }}>
                            <h5 className="fw-bolder" style={{ textAlign: 'center' }}>!!! மக்கள் நாட்காட்டியில் சிறப்பம்சங்கள் !!!</h5>
                            <div className='d-flex align-items-center'>
                                <div className='three'><img src="/images/1.png" className='one'/></div>
                                <div className='two' style={{ color: 'white' }}>தினசரி / மாத நாட்காட்டி / பஞ்சாங்கம்.</div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center'>
                                <div className='three'><img src="/images/2.png" className='one'/></div>
                                <div className='two' style={{ color: 'white' }}>ராசி பலன் (தினசர/மாத/வருட ).</div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center'>
                                <div className='three'><img src="/images/3.png" className='one'/></div>
                                <div className='two' style={{ color: 'white' }}>சனி பெயர்ச்சி, குருபெயர்ச்சி, ராகு/கேது பெயர்ச்சிப்பலங்கள்.</div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center'>
                                <div className='three'><img src="/images/4.png" className='one'/></div>
                                <div className='two' style={{ color: 'white' }}>சுபமுகூர்த்த தினங்கள்/ வாஸ்து தினங்கள்/ பண்டிகை நாட்கள்.</div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center'>
                                <div className='three'><img src="/images/5.png" className='one'/></div>
                                <div className='two' style={{ color: 'white' }}>ஆன்மீக தகவல்கள்/ ஆன்மீக குறிப்புகள்/ ஆன்மீக விடியோக்கள்/ தலவரலாறு.</div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center'>
                                <div className='three'><img src="/images/6.png" className='one'/></div>
                                <div className='two' style={{ color: 'white' }}>ஜோதிட தகவல்கள்/ பரிகாரங்கள்/ பலன்கள்.</div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center'>
                                <div className='three'><img src="/images/7.png" className='one'/></div>
                                <div className='two' style={{ color: 'white' }}>சித்தர்கள்/ மகான்கள்/ ரிஷிகள்/ இலக்கியங்கள்/ சிவக்குறிப்புகள்.</div>
                            </div>
                            <hr />
                            <div className='d-flex align-items-center'>
                                <div className='three'><img src="/images/8.png" className='one'/></div>
                                <div className='two' style={{ color: 'white' }}>திருக்குறள் இன்றைய சிறப்புகள்.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-4 p-3 bg-white rounded">
                    <h5 className="fw-bold text-center">எங்களின் சேவைகள்</h5>
                    <div className='d-flex justify-content-between'>
                        <div style={{ lineHeight: '2' }}>
                            <li><img src="/images/light.png" style={{ height: '30px' }} />அனுபவம் வாய்ந்த சொல்பலிதமுள்ள ஜோதிடர்</li>
                            <li><img src="/images/light.png" style={{ height: '30px' }} />எண்கணித ஜோதிடர், ஆன்மீக குருக்கள்</li>
                            <li><img src="/images/light.png" style={{ height: '30px' }} />வாஸ்து நிபுணர், மனையடி சாஸ்திர நிபுணர்</li>
                        </div>
                        <div style={{ lineHeight: '2' }}>
                            <li><img src="/images/light.png" style={{ height: '30px' }} />கணபதி ஹோமம் & பிற ஹோமங்கள்</li>
                            <li><img src="/images/light.png" style={{ height: '30px' }} />விஷேச பூஜைகள் ,பரிகார பூஜைகள்</li>
                            <li><img src="/images/light.png" style={{ height: '30px' }} />வீடு, அலுவலகம் & தொழில் நிறுவனங்கள்</li>
                        </div>
                    </div>
                </div>

                <div class="border border-warning bg-warning rounded p-4 fw-bold" style={{ color: 'blue' }}>
                    உங்கள் ஊரில் உள்ள கோவில்கள் மற்றும் வரலாற்று குறிப்புகளை நமது மக்கள் நாட்காட்டியில் இணைத்து உங்கள் ஊர் கோவிலின் முக்கியத்துவத்தை பொதுமக்களுக்கு கொண்டு சேர்க்கலாம்
                </div>

                <div class="p-4 fw-bolder d-flex flex-column" >
                    <div style={{ color: 'green' }}>
                        மேலும் இதுபோன்ற ஆன்மிகம் சார்ந்த அனைத்துவித சேவைகளையும் சிறந்த முறையில் உரிய நேரத்தில் பெற்றிட எங்களுடைய மக்கள் நாட்காட்டியை எப்போதும் தொடர்ந்து இணைந்திருங்கள்
                    </div>
                    <div style={{marginTop:'20px', textAlign:'center'}}>
                        📞செல் - +91 94893 84158, +91 94378 12715
                    </div>
                </div>
            </div>
            <PlayStoreBanner />
        </div>
    );
}

export default Addv