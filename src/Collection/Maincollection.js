import React from "react";
import './collection.css';

import d11 from './Cimages/d11.png';
import d2 from './Cimages/d2.png';
import d3 from './Cimages/d3.png';
import d4 from './Cimages/d4.png';
import d6 from './Cimages/d6.png';
import d7 from './Cimages/d7.png';
import d8 from './Cimages/d8.png';
import d9 from './Cimages/d9.png';
import Navigation from "../Navigation/Nav";
import Footer from "../footer";
function Coll(){
    return(
        <>
       
            <Navigation />
       
        <div id="banner" style={{backgroundImage:`url(${d2})`, backgroundSize:'cover'}}>
            <h1>Collections</h1>

        </div>
            <div className="collection">
        <div id="collection">
            <img src={d11} width={100} />
            <p id="dname">Carnelian</p>
            <p>Root Chakra, Sacral Chakra, Solar Plexus Chakra</p>
        </div>
        <div id="collection">
            <img src={d2} width={100} />
            <p id="dname">Carnelian</p>
            <p>Root Chakra, Sacral Chakra, Solar Plexus Chakra</p>
        </div>
        <div id="collection">
            <img src={d3} width={100} />
            <p id="dname">Carnelian</p>
            <p>Root Chakra, Sacral Chakra, Solar Plexus Chakra</p>
        </div>
        <div id="collection">
            <img src={d4} width={100} />
            <p id="dname">Carnelian</p>
            <p>Root Chakra, Sacral Chakra, Solar Plexus Chakra</p>
        </div>
        </div>

        <div className="collection">
        <div id="collection">
            <img src={d6} width={100} />
            <p id="dname">Carnelian</p>
            <p>Root Chakra, Sacral Chakra, Solar Plexus Chakra</p>
        </div>
        <div id="collection">
            <img src={d7} width={100} />
            <p id="dname">Carnelian</p>
            <p>Root Chakra, Sacral Chakra, Solar Plexus Chakra</p>
        </div>
        <div id="collection">
            <img src={d8} width={100} />
            <p id="dname">Carnelian</p>
            <p>Root Chakra, Sacral Chakra, Solar Plexus Chakra</p>
        </div>
        <div id="collection">
            <img src={d9} width={100} />
            <p id="dname">Carnelian</p>
            <p>Root Chakra, Sacral Chakra, Solar Plexus Chakra</p>
        </div>
        </div>
       
       <Footer />
        </>
    )
       
    
}

export default Coll;