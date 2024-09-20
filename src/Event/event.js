import React from "react";
import './event.css';
import e1 from './eimages/e1.jpg';
import e5 from './eimages/e5.jpg';
import e7 from './eimages/e7.jpg';
import e4 from './eimages/e4.jpg';
import { NavLink } from "react-router-dom";
function Event(){
    return(
        <>
        <div id="coc">
            <p>Events</p>
        </div>
        <div className="event">
            <div id="event">
                <img src={e1} width={100} />
            </div>
            <div id="event">
                <img src={e5} width={100} />
            </div>
            <div id="event">
                <img src={e7} width={100} />
            </div>
        </div>

        <div id="more">
            <NavLink to='/Mainevents'>
            <li> <a>More Events </a></li>
            </NavLink>
        </div>
        </>
    )
}

export default Event;