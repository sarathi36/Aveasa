import React from "react";
import './collection.css';

import d11 from './Cimages/d11.png';
import d2 from './Cimages/d2.png';
import d3 from './Cimages/d3.png';
import d4 from './Cimages/d4.png';
import d5 from './Cimages/d5.png';
import { NavLink } from "react-router-dom";

function Collection(){
    return(
        <>
       <div id="coll">
        <NavLink to='/Collections'>
         <li> <a  >Shop By Collection</a></li>
        </NavLink>
       
       </div>

       <div className="collection">
        <div id="collection">
            <img src={d11} width={100} />
            <p id="dname">CARNELIAN</p>
            <p>Root Chakra, Sacral Chakra, Solar Plexus Chakra</p>
        </div>
        <div id="collection">
            <img src={d2} width={100} />
            <p id="dname">AMETHYST</p>
            <p>Third Eye Chakra, Crown Chakra, Higher Chakras</p>
        </div>
        <div id="collection">
            <img src={d3} width={100} />
            <p id="dname">CITRINE</p>
            <p>Sacral Chakra, Solar Plexus Chakra, Crown Chakra</p>
        </div>
        <div id="collection">
            <img src={d4} width={100} />
            <p id="dname">SUNSTONE</p>
            <p>Sacral Chakra, Solar Plexus Chakra</p>
        </div>
       

        

       </div>
       <div id="more" >
        <NavLink to='/Maincollections'>
            <li> <a>More Collections </a></li>
        
        </NavLink>
           
        </div>

        </>
    )

}

export default Collection;