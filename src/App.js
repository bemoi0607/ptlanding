import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Router, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';
import five from './images/5.png';
import six from './images/6.png';
import seven from './images/7.png';
import eight from './images/8.png';
import nine  from './images/9.png';
import ten from './images/10.png';
import eleven from './images/11.png';
import twelve from './images/12.png';
import thirteen from './images/13.png';
import fourteen from './images/14.png';
import fiftheen from './images/15.png';
import sixteen from './images/16.png';
import seventeen from './images/17.png';
import eighteen from './images/18.png';
import nintheen from './images/19.png';
import twenty from './images/20.png';
import twentyone from './images/21.png';
import twentytwo from './images/22.png';
import twentythree from './images/23.png';
import twentyfour from './images/24.png'
import twentysix from './images/26.png';
import twentyseven from './images/27.png';
import twentyeight from './images/28.png';
import twentynine from './images/29.png';
import TagManager from 'react-gtm-module';



function App() {
  const scrollDepthRef = useRef([]);
  const location = useLocation();

 

  const tagManagerArgs = {
    gtmId: 'GTM-TGW97R75'
  }

  TagManager.initialize(tagManagerArgs);



  const handleButtonClick1 = () => {
    // Track button click event
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: '문의하기',
    });

    // Redirect to the specified URL
    window.location.href = 'https://talk.naver.com/ct/w4f4np?frm=mnmb&frm=nmb_detail#nafullscreen';
  };

  const handleButtonClick2 = () => {
    // Track button click event
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: '패키지1',
    });

    // Redirect to the specified URL
    window.location.href = 'https://smartstore.naver.com/lifepalette/products/9538083868';
  };

  const handleButtonClick3 = () => {
    // Track button click event
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: '패키지2',
    });

    // Redirect to the specified URL
    window.location.href = 'https://m.booking.naver.com/booking/10/bizes/996848/items/5452772?area=ple';
  };


  return (

    <div className="App">
      <img src={one}  style={{width:'100%',height:'100%'}} />
      <img src={two}  style={{width:'100%',height:'100%'}}  />
      <img src={three}  style={{width:'100%',height:'100%'}} />
      <img src={four}  style={{width:'100%',height:'100%'}} />
      <img src={five}  style={{width:'100%',height:'100%'}} />
      <img src={six}  style={{width:'100%',height:'100%'}} />
      
      <img src={seven}  style={{width:'100%',height:'100%'}} />
      <img src={eight}  style={{width:'100%',height:'100%'}}/>
      <img src={nine}  style={{width:'100%',height:'100%'}}/>
      <img src={ten}  style={{width:'100%',height:'100%'}} />
      <img src={eleven}  style={{width:'100%',height:'100%'}} />
      <img src={twelve}  style={{width:'100%',height:'100%'}} />
      <img src={thirteen}  style={{width:'100%',height:'100%'}} />
      <img src={fourteen}  style={{width:'100%',height:'100%'}} />
      <img src={fiftheen}  style={{width:'100%',height:'100%'}} />
      <img src={sixteen}  style={{width:'100%',height:'100%'}} />
      <img src={seventeen}  style={{width:'100%',height:'100%'}} />
      <img src={eighteen}  style={{width:'100%',height:'100%'}} />
      <img src={nintheen}  style={{width:'100%',height:'100%'}} />
      <img src={twenty}  style={{width:'100%',height:'100%'}} />
      <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <button style={{borderColor:'#4B6AF4',borderRadius:30,width:'30%',height:'40%',fontWeight:'bold',color: '#4B6AF4',backgroundColor:'white'}} onClick={handleButtonClick1}>
         톡톡 상담하기
        </button>
      </div>
      <img src={twentyone}  style={{width:'100%',height:'100%'}} />
      <img src={twentytwo}  style={{width:'100%',height:'100%'}} />
      <img src={twentythree}  style={{width:'100%',height:'100%'}} />
      <img src={twentyfour}  style={{width:'100%',height:'100%'}} />
      <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <button style={{borderColor:'#4B6AF4',borderRadius:30,width:'30%',height:'40%',fontWeight:'bold',color: '#4B6AF4',backgroundColor:'white'}} onClick={handleButtonClick3}>
          1회 체험받기
        </button>
      </div>
      <img src={twentysix}  style={{width:'100%',height:'100%'}} />
      <img src={twentyseven}  style={{width:'100%',height:'100%'}} />
      <img src={twentyeight}  style={{width:'100%',height:'100%'}} />
      <img src={twentynine}  style={{width:'100%',height:'100%'}} />
      <div style={{ width: '100%', height: 100, backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}></div>
      <div style={{ position: 'fixed', bottom: 0, width: '100%',height:100, backgroundColor: 'transparent', display: 'flex', justifyContent: 'center',alignItems:'center' }}>
        <button style={{fontSize:18,borderColor: '#4B6AF4', borderRadius: 15, width: '40%', height: 50, fontWeight: 'bold', color: '#4B6AF4', backgroundColor: 'white' }} onClick={handleButtonClick1}>
          톡톡 상담하기
        </button>
        <button style={{ fontSize:18,border: 'none',marginLeft:20,borderColor: '#4B6AF4', borderRadius: 15, width: '40%', height: 50, fontWeight: 'bold', color: 'white', backgroundColor: '#4B6AF4' }} onClick={handleButtonClick3}>
          1회 체험받기
        </button>
      </div>
    </div>
  );
}

export default App;
