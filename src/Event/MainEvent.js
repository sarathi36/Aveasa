import React from "react";
import './event.css';
import e1 from './eimages/e1.jpg';
import e2 from './eimages/e2.jpg';
import e3 from './eimages/e3.jpg';
import e4 from './eimages/e4.jpg';
import e5 from './eimages/e5.jpg';
import e6 from './eimages/e6.jpg';
import e7 from './eimages/e7.jpg';
import e8 from './eimages/e8.jpg';
import e9 from './eimages/e9.jpg';
import Navigation from "../Navigation/Nav";
import Footer from "../footer";
function Mainevent(){
    return(
        <>
         
        <Navigation />
      

        <div id="banner">
            <h1>EVENTS</h1>

        </div>
         <div className="event " style={{marginBottom:'50px' ,backgroundColor:'white'}}>
            <div id="event" >
                <img src={e1} width={100} />
                
            </div>
            <div id="event">
                <img src={e7} width={100} />
            </div>
            <div id="event">
                <img src={e8} width={100} />
            </div>
        </div>
        <div className="event" style={{backgroundColor:'white'}}>
            <div id="event" >
                <img src={e5} width={100} />
                
            </div>
            <div id="event">
                <img src={e6} width={100} />
            </div>
            <div id="event">
                <img src={e7} width={100} />
            </div>
        </div>

        <Footer />
        </>
    )
}

export default Mainevent;